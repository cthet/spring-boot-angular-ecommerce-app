import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
  <div>
    <h1>404 Error</h1>
    <h1>Page Not Found</h1>
</div>`,
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("notfound");
  }

}
