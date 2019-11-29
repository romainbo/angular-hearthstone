import { TestBed } from '@angular/core/testing';

import { NavigationDisplayService } from './navigation-display.service';

describe('NavigationDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationDisplayService = TestBed.get(NavigationDisplayService);
    expect(service).toBeTruthy();
  });
});
