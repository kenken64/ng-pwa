import { TestBed, inject } from '@angular/core/testing';

import { CryptonewsService } from './cryptonews.service';

describe('CryptonewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptonewsService]
    });
  });

  it('should be created', inject([CryptonewsService], (service: CryptonewsService) => {
    expect(service).toBeTruthy();
  }));
});
