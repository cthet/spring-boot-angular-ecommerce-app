import { TestBed } from '@angular/core/testing';

import { ApparelCategoriesService } from './apparel-categories.service';

describe('ApparelCategoriesService', () => {
  let service: ApparelCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApparelCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
