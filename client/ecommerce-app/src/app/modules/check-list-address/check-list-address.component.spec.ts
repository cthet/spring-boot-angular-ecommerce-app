import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListAddressComponent } from './check-list-address.component';

describe('CheckListAddressComponent', () => {
  let component: CheckListAddressComponent;
  let fixture: ComponentFixture<CheckListAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckListAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
