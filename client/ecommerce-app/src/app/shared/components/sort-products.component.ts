import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-sort-products',
  template: `
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
  `,
  styleUrls: ['./products-category.component.css'],
})
export class SortProductsComponent {

  @Output() sort = new EventEmitter<MatRadioChange>();
}
