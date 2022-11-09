import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ApparelCategory } from 'src/app/products/models/apparelCategory';

@Component({
  selector: 'app-products-category',
  template: `
    <div class="container">
      <h2>Catégories</h2>
      <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
        <ngb-panel title="Prêt à porter">
          <ng-template ngbPanelContent>
            <ul>
              <li *ngFor="let category of apparelCategories">
                <mat-checkbox
                  [checked]="category.checked"
                  (change)="
                    filter.emit({
                      checked: $event.checked,
                      categoryId: category.id
                    })
                  "
                  >{{ category.apparel_category }}</mat-checkbox
                >
              </li>
            </ul>
          </ng-template>
        </ngb-panel>
      </ngb-accordion>
      <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
        <ngb-panel title="Trier par">
          <ng-template ngbPanelContent>
            <ul>
              <mat-radio-group (change)="sort.emit($event)">
                <li>
                  <mat-radio-button value="unitPrice, desc"
                    >Prix Décroissant</mat-radio-button
                  >
                </li>
                <li>
                  <mat-radio-button value="unitPrice, asc"
                    >Prix Croissant</mat-radio-button
                  >
                </li>
              </mat-radio-group>
            </ul>
          </ng-template>
        </ngb-panel>
      </ngb-accordion>
    </div>
  `,
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent {
  @Input() apparelCategories!: ApparelCategory[] | null;

  @Output() filter = new EventEmitter<{
    checked: boolean;
    categoryId: number;
  }>();

  @Output() sort = new EventEmitter<MatRadioChange>();
}
