import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelCategoriesComponent } from './apparel-categories.component';

describe('ApparelCategoriesComponent', () => {
  let component: ApparelCategoriesComponent;
  let fixture: ComponentFixture<ApparelCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparelCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApparelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
