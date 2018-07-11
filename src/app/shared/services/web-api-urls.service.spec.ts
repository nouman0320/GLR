import { TestBed, inject } from '@angular/core/testing';

import { WebApiUrlsService } from './web-api-urls.service';

describe('WebApiUrlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebApiUrlsService]
    });
  });

  it('should be created', inject([WebApiUrlsService], (service: WebApiUrlsService) => {
    expect(service).toBeTruthy();
  }));
});
