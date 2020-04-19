import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";

export class TodoAppStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const helloLambda = new lambda.Function(this, "HelloLambda", {
            code: lambda.Code.fromAsset("lambda"),
            handler: "hello.handler",
            runtime: lambda.Runtime.NODEJS_12_X,
            memorySize: 256,
            timeout: cdk.Duration.seconds(10),
            environment: { isProduction: "absolutely not" }
        });

        new apiGateway.LambdaRestApi(this, "Endpoint", {
            handler: helloLambda
        });
    }
}
