import { TestBed } from '@angular/core/testing';

import { LoadJsDynamicallyService } from './load-js-dynamically.service';

describe('LoadJsDynamicallyService', () => {
  let service: LoadJsDynamicallyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJsDynamicallyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
