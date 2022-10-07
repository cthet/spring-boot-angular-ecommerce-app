import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatStepperNext } from '@angular/material/stepper';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @Input()
  checkId: boolean = false;
  @Input()
  checkAddress: boolean = false;
  checkReview: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onCheckId(checkId: boolean) {
    this.checkId = checkId;
  }

  onCheckAddress(checkAddress: boolean) {
    this.checkAddress = checkAddress;
  }
}
