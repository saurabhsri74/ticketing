import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@saurabhsri/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
