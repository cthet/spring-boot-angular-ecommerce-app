import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-sort-products',
  template: `

    <div class="accordion">
      <mat-accordion>
        <mat-expansion-panel class="accordion-panel">
          <mat-expansion-panel-header>
            <mat-panel-title class="accordion-title">
            Trier par
            </mat-panel-title>
          </mat-expansion-panel-header>
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
        </mat-expansion-panel>
          <mat-expansion-panel (opened)="panelOpenState = true"
                            (closed)="panelOpenState = false">
          
            </mat-expansion-panel>
          </mat-accordion>
      </div>
  `,
  styleUrls: ['./sort-products.component.css'],
})
export class SortProductsComponent {
  panelOpenState = false;
  @Output() sort = new EventEmitter<MatRadioChange>();
}
