import { TestBed } from '@angular/core/testing';

import { ComponentLazyLoaderService } from './component-lazy-loader.service';

describe('ComponentLazyLoaderService', () => {
  let service: ComponentLazyLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLazyLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
