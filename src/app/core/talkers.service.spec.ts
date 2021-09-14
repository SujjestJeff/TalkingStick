import { TestBed } from '@angular/core/testing';

import { TalkersService } from './talkers.service';

describe('TalkersService', () => {
  let service: TalkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
