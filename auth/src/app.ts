import express from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { errorHandler, NotFoundError } from '@saurabhsri/common';

const app = express();
app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
