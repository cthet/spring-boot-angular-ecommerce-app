import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() addressSelected!: Address | null;
  @Input() addresses!: Address[] | null;

  @Output() edit = new EventEmitter<Address>();
  @Output() select = new EventEmitter<Address>();
  @Output() add = new EventEmitter<Address>(); 
  @Output() delete = new EventEmitter<number>();
  @Output() continue = new EventEmitter();
  
  ngOnInit(): void {}  

}
