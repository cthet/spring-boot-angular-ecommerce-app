import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-details',
  template: `
    <div class="container">
      <img [src]="headerImage" />
      <h1>Nouveautés</h1>
      <img [src]="footerImage" />
    </div>
  `,
  styles: [
    `
      .container {
        display: block;
        height: 100vh;
      }

      img {
        width: 100%;
      }

      h1 {
        text-align: center;
        padding: 20px;
        margin: 0 auto;
      }
    `,
  ],
})
export class HomeComponent {
  @Input() headerImage: string | null = '';
  @Input() footerImage: string | null = '';
}
