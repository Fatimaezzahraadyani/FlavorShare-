import { TestBed } from '@angular/core/testing';

import { RecepeService } from './recepe.service';

describe('RecepeService', () => {
  let service: RecepeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
