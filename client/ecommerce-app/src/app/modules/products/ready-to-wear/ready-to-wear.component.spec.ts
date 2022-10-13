import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToWearComponent } from './ready-to-wear.component';

describe('ReadyToWearComponent', () => {
  let component: ReadyToWearComponent;
  let fixture: ComponentFixture<ReadyToWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyToWearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyToWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
