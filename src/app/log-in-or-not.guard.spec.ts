import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logInOrNotGuard } from './log-in-or-not.guard';

describe('logInOrNotGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logInOrNotGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
