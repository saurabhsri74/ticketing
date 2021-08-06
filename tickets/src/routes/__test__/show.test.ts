import request from 'supertest';
import { app } from '../../app';
import { signin } from '../../test/auth-helper';
import mongoose from 'mongoose';

it('returns a 404 if the ticket is not found', async () => {
  const id = mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/tickets/${id}`).send().expect(404);
});

it('returns the ticket if it is found', async () => {
  const title = 'Ticket 1';
  const price = 20;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', await signin())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
