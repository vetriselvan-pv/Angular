import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularApi } from './angular-api';

describe('AngularApi', () => {
  let component: AngularApi;
  let fixture: ComponentFixture<AngularApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
