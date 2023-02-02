import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ApparelCategory } from '../../../models/ApparelCategory';

@Component({
  selector: 'app-products-category',
  template: `  
    <div class="accordion">
      <mat-accordion>
        <mat-expansion-panel class="accordion-panel">
          <mat-expansion-panel-header>
            <mat-panel-title class="accordion-title">
              Prêt à porter
            </mat-panel-title>
          </mat-expansion-panel-header>
            <ul>
                <mat-radio-group (change)="filter.emit($event)">
                  <li>
                    <mat-radio-button 
                    *ngFor="let category of apparelCategories"
                    [value]="category"
                    
                    >{{ category.apparel_category }}                         
                    </mat-radio-button>                
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
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent {
  panelOpenState = false;
  @Input() apparelCategories!: ApparelCategory[] | null;

  @Output() filter = new EventEmitter<MatRadioChange>();

}
