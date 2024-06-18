import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

import lambdaApi, { Request } from 'lambda-api';

const api = lambdaApi();

// define routes
api.get('/api/status', async () => {
  return { status: 'ok' };
});
api.get('/api/echo', async (req: Request) => {
  return JSON.stringify(req);
});
api.post('/api/echo', async (req: Request) => {
  return req.body;
});

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  return api.run(event, context);
};
