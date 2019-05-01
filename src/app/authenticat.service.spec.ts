import { TestBed } from '@angular/core/testing';

import { AuthenticatService } from './authenticat.service';

describe('AuthenticatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatService = TestBed.get(AuthenticatService);
    expect(service).toBeTruthy();
  });
});
