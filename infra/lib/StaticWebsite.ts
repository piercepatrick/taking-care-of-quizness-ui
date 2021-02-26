import { Stack, StackProps, App, RemovalPolicy } from "@aws-cdk/core";
import { Bucket, BlockPublicAccess } from "@aws-cdk/aws-s3";
import {
  ARecord,
  HostedZone,
  IHostedZone,
  RecordTarget,
} from "@aws-cdk/aws-route53";
import { DnsValidatedCertificate } from "@aws-cdk/aws-certificatemanager";
import { CloudFrontTarget } from "@aws-cdk/aws-route53-targets";
import {
  OriginAccessIdentity,
  CloudFrontWebDistribution,
  SSLMethod,
  SecurityPolicyProtocol,
  AliasConfiguration,
} from "@aws-cdk/aws-cloudfront";
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';

export interface StaticWebsiteProps extends StackProps {
  hostedZone?: string;
  subDomain?: string;
  defaultRootObject?: string;
}

export class StaticWebsite extends Stack {
  constructor(scope: App, id: string, props: StaticWebsiteProps) {
    super(scope, id, props);

    let aliasConfiguration: AliasConfiguration | undefined;
    let domain: string | undefined;
    let zone: IHostedZone | undefined;

    if (props.hostedZone) {
      zone = HostedZone.fromLookup(this, "Zone", {
        domainName: props.hostedZone,
      });

      domain = props.subDomain
        ? `${props.subDomain}.${props.hostedZone}`
        : props.hostedZone;

      aliasConfiguration = {
        acmCertRef: new DnsValidatedCertificate(this, "SiteCertificate", {
          domainName: domain,
          hostedZone: zone,
          region: "us-east-1",
        }).certificateArn,
        names: [domain],
        sslMethod: SSLMethod.SNI,
        securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
      };
    }

    const defaultRootObject = props.defaultRootObject
      ? props.defaultRootObject
      : 'index.html';

    const oai = new OriginAccessIdentity(
      this,
      `CloudFrontOriginAccessIdentity`
    );

    const bucket = new Bucket(this, "S3Bucket", {
      bucketName: id,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });
    bucket.grantRead(oai);

    const distribution = new CloudFrontWebDistribution(
      this,
      "CloudFrontDistribution",
      {
        defaultRootObject,
        aliasConfiguration,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: oai,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: `/${defaultRootObject}`,
          },
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: `/${defaultRootObject}`,
          },
        ],
      }
    );

    if (domain && zone) {
      new ARecord(this, "SiteAliasRecord", {
        recordName: domain,
        target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        zone,
      });
    }

    new BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [ Source.asset('../build') ],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}
