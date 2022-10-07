import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegenderComponent } from './homegender.component';

describe('HomegenderComponent', () => {
  let component: HomegenderComponent;
  let fixture: ComponentFixture<HomegenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomegenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomegenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
