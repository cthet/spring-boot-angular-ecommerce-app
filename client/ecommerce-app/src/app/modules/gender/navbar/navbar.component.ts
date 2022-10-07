import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPopperClassPlacement } from '@ng-bootstrap/ng-bootstrap/util/positioning';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  gender = "women";
  brands = "brands";
  readytowear = "ready-to-wear";

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateLinks();
  }

  updateLinks() {
    this.activatedRoute.params.subscribe(
      (item) => (this.gender = item['gender'])
    );
  }
}
