import { TestBed } from '@angular/core/testing';

import { ArsenalService } from './arsenal.service';

describe('ArsenalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArsenalService = TestBed.get(ArsenalService);
    expect(service).toBeTruthy();
  });
});
