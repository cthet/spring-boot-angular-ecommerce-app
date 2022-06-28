import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryMenuComponent } from './products-category-menu.component';

describe('ProductsCategoryMenuComponent', () => {
  let component: ProductsCategoryMenuComponent;
  let fixture: ComponentFixture<ProductsCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCategoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
