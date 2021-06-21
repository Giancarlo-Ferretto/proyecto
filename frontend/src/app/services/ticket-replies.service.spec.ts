import { TestBed } from '@angular/core/testing';

import { TicketRepliesService } from './ticket-replies.service';

describe('TicketRepliesService', () => {
  let service: TicketRepliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketRepliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
