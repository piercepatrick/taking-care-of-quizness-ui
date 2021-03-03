const { expect, haveResource } = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const StaticWebsite = require("./StaticWebsite");

describe("StaticWebsite", () => {
  it("should create the basic resources", () => {
    const app = new cdk.App();
    const stack = new StaticWebsite(app, "test", {
      env: {
        account: "11111111111",
        region: "us-east-1",
      },
    });
    expect(stack).to(haveResource("AWS::S3::Bucket"));
    expect(stack).to(haveResource("AWS::CloudFront::Distribution"));
    expect(stack).to(
      haveResource("AWS::CloudFront::CloudFrontOriginAccessIdentity")
    );
  });
});
