import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import EggheadBuildAnAppWithAwsCloudDevelopmentKit = require('../lib/egghead-build-an-app-with-aws-cloud-development-kit-stack');

test('SQS Queue Created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EggheadBuildAnAppWithAwsCloudDevelopmentKit.EggheadBuildAnAppWithAwsCloudDevelopmentKitStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});

test('SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new EggheadBuildAnAppWithAwsCloudDevelopmentKit.EggheadBuildAnAppWithAwsCloudDevelopmentKitStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
