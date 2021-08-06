import { Publisher, OrderCreatedEvent, Subjects } from '@saurabhsri/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
