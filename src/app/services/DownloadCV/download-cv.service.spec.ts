import { TestBed } from '@angular/core/testing';

import { DownloadCVService } from './download-cv.service';

describe('DownloadCVService', () => {
  let service: DownloadCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
