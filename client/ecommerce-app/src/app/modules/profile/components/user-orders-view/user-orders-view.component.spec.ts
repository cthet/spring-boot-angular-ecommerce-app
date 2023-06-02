import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersViewComponent } from './user-orders-view.component';

describe('UserOrdersViewComponent', () => {
  let component: UserOrdersViewComponent;
  let fixture: ComponentFixture<UserOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrdersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
