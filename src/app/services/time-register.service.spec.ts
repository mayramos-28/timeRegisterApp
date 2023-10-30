import { TestBed } from '@angular/core/testing';

import { TimeRegisterService } from './time-register.service';

describe('TimeRegisterService', () => {
  let service: TimeRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
