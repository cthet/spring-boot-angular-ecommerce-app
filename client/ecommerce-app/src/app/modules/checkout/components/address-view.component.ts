import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  @Input() address!: FormGroup;
  @Input() countries!: Country[] | null;
  @Input() edit!: Boolean | null;
  @Input() editAddress!: Address | null;
  country!: Country;

  @Output() save = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor() {}

  ngOnInit(): void {    
    this.country = this.address.value.country;
  }

  get civility(){
    return this.address.value.civility;
  }
  
  compare(c1: Country, c2: Country) {
    return c1 && c2 && c1.id === c2.id;
  }

}
