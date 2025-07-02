import { Handler } from '@netlify/functions';
import { MemStorage } from '../../server/storage';
import type { InsertUser } from '../../shared/schema';

const storage = new MemStorage();

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing request body' }),
    };
  }
  try {
    const data: InsertUser = JSON.parse(event.body);
    if (!data.username || !data.password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing username or password' }),
      };
    }
    const user = await storage.createUser(data);
    return {
      statusCode: 201,
      body: JSON.stringify(user),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON' }),
    };
  }
};

export { handler }; 