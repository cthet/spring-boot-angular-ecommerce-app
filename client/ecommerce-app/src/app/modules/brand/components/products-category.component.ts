import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApparelCategory } from '../../../models/ApparelCategory';

@Component({
  selector: 'app-products-category',
  template: `  
    <div class="container">
      <h3>Catégories</h3>

    <div class="accordion">
      <mat-accordion>
        <mat-expansion-panel class="accordion-panel">
          <mat-expansion-panel-header>
            <mat-panel-title class="accordion-title">
              Prêt à porter
            </mat-panel-title>
          </mat-expansion-panel-header>
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
        </mat-expansion-panel>
          <mat-expansion-panel (opened)="panelOpenState = true"
                            (closed)="panelOpenState = false">
          
            </mat-expansion-panel>
          </mat-accordion>
      </div>
    </div>
  `,
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent {
  panelOpenState = false;
  @Input() apparelCategories!: ApparelCategory[] | null;

  @Output() filter = new EventEmitter<{
    checked: boolean;
    categoryId: number;
  }>();


}
