import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPaymentComponent } from './check-payment.component';

describe('CheckPaymentComponent', () => {
  let component: CheckPaymentComponent;
  let fixture: ComponentFixture<CheckPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
