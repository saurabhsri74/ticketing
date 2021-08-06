import { Publisher, Subjects, TicketUpdatedEvent } from '@saurabhsri/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
