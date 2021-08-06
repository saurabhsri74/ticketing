import { Publisher, OrderCancelledEvent, Subjects } from '@saurabhsri/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
