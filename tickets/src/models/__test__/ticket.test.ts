import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async () => {
  // Create instance of ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });

  // Save the ticket in the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make two seperate changes to the tickts we fetched
  firstInstance!.set({ price: 26 });
  secondInstance?.set({ price: 39 });

  // save the first fetched ticket
  await firstInstance!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  // Create instance of ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });

  // Save the ticket in the database
  await ticket.save();
  expect(ticket.version).toEqual(0);

  // Save the ticket in the database
  await ticket.save();
  expect(ticket.version).toEqual(1);

  // Save the ticket in the database
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
