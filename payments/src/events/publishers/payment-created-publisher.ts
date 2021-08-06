import { Publisher, Subjects, PaymentCreatedEvent } from '@saurabhsri/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
