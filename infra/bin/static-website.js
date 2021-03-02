const cdk = require("@aws-cdk/core");
const StaticWebsite = require("../lib/StaticWebsite");

const app = new cdk.App();
new StaticWebsite(app, `taking-care-of-quizness-ui`, {
  env: {
    region: "us-east-1",
  },
  tags: {
    GITHUB_ACTIONS: "MTSU_WORKSHOP",
  },
});
