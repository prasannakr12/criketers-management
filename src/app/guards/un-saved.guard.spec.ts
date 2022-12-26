import { TestBed } from '@angular/core/testing';

import { UnSavedGuard } from './un-saved.guard';

describe('UnSavedGuard', () => {
  let guard: UnSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
