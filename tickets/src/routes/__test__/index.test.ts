import request from 'supertest';
import { app } from '../../app';
import { signin } from '../../test/auth-helper';

const createTicket = async (title: string, price: number) => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', await signin())
    .send({
      title,
      price,
    })
    .expect(201);
};

it('can fetch a list of tickets', async () => {
  await createTicket('Ticket 2', 25);
  await createTicket('Ticket 3', 30);
  await createTicket('Ticket 4', 35);

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
