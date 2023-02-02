import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../../models/Brand';

@Component({
  selector: 'app-brands-category',
  template: `  
    <div class="accordion">
      <mat-accordion>
        <mat-expansion-panel class="accordion-panel">
          <mat-expansion-panel-header>
            <mat-panel-title class="accordion-title">
             Marques
            </mat-panel-title>
          </mat-expansion-panel-header>
          <ul>
              <li *ngFor="let brand of brands">
                <mat-checkbox
                  [checked]="brand.checked"
                  (change)="
                    filter.emit({
                      checked: $event.checked,
                      brandId: brand.id
                    })
                  "
                  >{{ brand.brand_category }}</mat-checkbox
                >
              </li>
          </ul>
        </mat-expansion-panel>
          <mat-expansion-panel (opened)="panelOpenState = true"
                            (closed)="panelOpenState = false">
          
            </mat-expansion-panel>
          </mat-accordion>
    </div>
  `,
  styleUrls: ['./brands-category.component.css'],
})
export class BrandsCategoryComponent {
  panelOpenState = false;
  @Input() brands!: Brand[] | null;

  @Output() filter = new EventEmitter<{
    checked: boolean;
    brandId: number;
  }>();

}
