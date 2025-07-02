import { Handler } from '@netlify/functions';
import { MemStorage } from '../../server/storage';
import type { User } from '../../shared/schema';

const storage = new MemStorage();

// Example: Pre-populate with a user for demonstration
storage.createUser({ username: 'demo', password: 'password' });

const handler: Handler = async (event, context) => {
  const id = event.queryStringParameters?.id;
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing user id' }),
    };
  }
  const user = await storage.getUser(Number(id));
  if (!user) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'User not found' }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};

export { handler }; 