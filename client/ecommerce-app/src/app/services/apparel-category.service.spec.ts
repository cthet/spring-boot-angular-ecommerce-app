import { TestBed } from '@angular/core/testing';
import { ApparelCategoryService } from './apparel-category.service';


describe('ApparelCategoryService', () => {
  let service: ApparelCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApparelCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
