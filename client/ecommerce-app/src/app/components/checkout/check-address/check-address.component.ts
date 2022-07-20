import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-check-address',
  templateUrl: './check-address.component.html',
  styleUrls: ['./check-address.component.css'],
})
export class CheckAddressComponent implements OnInit {
  addresses: Address[] = [];

  constructor() {}

  ngOnInit(): void {}
}
