import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const signin = async () => {
  // Build a JWT payload. { id, email }
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com',
  };

  // Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session object. { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn that session into json
  const sessionJSON = JSON.stringify(session);

  // Encode json as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // Return a string that's a cookie with encoded data

  return [`express:sess=${base64}`];
};

export { signin };
