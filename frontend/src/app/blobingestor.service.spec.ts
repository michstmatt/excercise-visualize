import { TestBed } from '@angular/core/testing';

import { BlobingestorService } from './blobingestor.service';

describe('BlobingestorService', () => {
  let service: BlobingestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlobingestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
