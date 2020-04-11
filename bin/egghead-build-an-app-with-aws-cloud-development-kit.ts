#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { EggheadBuildAnAppWithAwsCloudDevelopmentKitStack } from '../lib/egghead-build-an-app-with-aws-cloud-development-kit-stack';

const app = new cdk.App();
new EggheadBuildAnAppWithAwsCloudDevelopmentKitStack(app, 'EggheadBuildAnAppWithAwsCloudDevelopmentKitStack');
