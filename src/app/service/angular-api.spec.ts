import { TestBed } from '@angular/core/testing';

import { AngularApi } from './angular-api';

describe('AngularApi', () => {
  let service: AngularApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
