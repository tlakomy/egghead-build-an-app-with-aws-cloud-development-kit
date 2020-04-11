#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { TodoAppStack } from '../lib/todo-app-stack';

const app = new cdk.App();
new TodoAppStack(app, 'TodoAppStack');
