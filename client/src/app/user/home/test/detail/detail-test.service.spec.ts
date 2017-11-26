import { TestBed, inject } from '@angular/core/testing';

import { DetailTestService } from './detail-test.service';

describe('DetailTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailTestService]
    });
  });

  it('should be created', inject([DetailTestService], (service: DetailTestService) => {
    expect(service).toBeTruthy();
  }));
});
