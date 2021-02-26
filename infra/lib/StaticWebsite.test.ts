import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { StaticWebsite } from './StaticWebsite';

describe('StaticWebsite', () => {
  it('should create the basic resources', () => {
    const app = new App();
    const stack = new StaticWebsite(app, 'test', {
      env: {
        account: '11111111111',
        region: 'us-east-1',
      },
    });
    expectCDK(stack).to(haveResource('AWS::S3::Bucket'));
    expectCDK(stack).to(haveResource('AWS::CloudFront::Distribution'));
    expectCDK(stack).to(
      haveResource('AWS::CloudFront::CloudFrontOriginAccessIdentity')
    );
  });
});
