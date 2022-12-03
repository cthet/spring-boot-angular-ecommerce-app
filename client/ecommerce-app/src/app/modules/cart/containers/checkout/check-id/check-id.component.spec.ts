import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIdComponent } from './check-id.component';

describe('CheckIdComponent', () => {
  let component: CheckIdComponent;
  let fixture: ComponentFixture<CheckIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
