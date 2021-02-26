import { App } from '@aws-cdk/core';
import { StaticWebsite } from '../lib/StaticWebsite';

const app = new App();
new StaticWebsite(app, `taking-care-of-quizness-ui`,
  {
    env: {
      region: 'us-east-1',
    },
    tags: {
      GITHUB_ACTIONS: 'MTSU_WORKSHOP',
    },
  }
);
