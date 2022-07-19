import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAddressComponent } from './check-address.component';

describe('CheckAddressComponent', () => {
  let component: CheckAddressComponent;
  let fixture: ComponentFixture<CheckAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
