import { Component, Input } from '@angular/core';
import { Brand } from '../../../models/Brand';

@Component({
  selector: 'app-brand',
  template: ` 
  <div class="brand-container">
    <div class="container">
      <h1>{{ brand_category }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>`,
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  @Input() brand!: Brand | null;

  get brand_category() {
    if (this.brand != null) return this.brand.brand_category;
    return;
  }

  get description() {
    if (this.brand != null) return this.brand.description;
    return;
  }
}
