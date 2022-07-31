import { TestBed } from '@angular/core/testing';

import { ProductthingService } from './productthing.service';

describe('ProductthingService', () => {
  let service: ProductthingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductthingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
