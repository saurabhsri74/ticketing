import { Publisher, Subjects, TicketCreatedEvent } from '@saurabhsri/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
