import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperator } from './rxjs-operator';

describe('RxjsOperator', () => {
  let component: RxjsOperator;
  let fixture: ComponentFixture<RxjsOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
