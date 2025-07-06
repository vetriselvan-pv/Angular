import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDecoratorExample } from './pipe-decorator-example';

describe('PipeDecoratorExample', () => {
  let component: PipeDecoratorExample;
  let fixture: ComponentFixture<PipeDecoratorExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeDecoratorExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDecoratorExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
