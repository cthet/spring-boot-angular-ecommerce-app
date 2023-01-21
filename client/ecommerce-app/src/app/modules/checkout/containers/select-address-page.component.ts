import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { addressActions } from '../store/actions';
import { addressSelectors } from '../store/selectors';

@Component({
  selector: 'app-select-address-page',
  template: `
  <app-address-list [addresses]="listAddress$ | async" [addressSelected]="address$ | async" (edit)="editAddress($event)" (select)="selectAddress($event)" (add)="addAddress()" (delete)="deleteAddress($event)"></app-address-list>`,
})
export class SelectAddressPageComponent implements OnInit {  
  listAddress$!: Observable<Address[]>;
  address$!: Observable<Address | null>;
  addressTotal$!: Observable<number>;

  constructor(private store: Store<Store>) {
    this.address$ = this.store.select(addressSelectors.selectShippingAddress); 
    this.listAddress$ = this.store.select(addressSelectors.selectAllAddresses);    
    this.addressTotal$ = this.store.select(addressSelectors.selectAddressTotal);
  }

  ngOnInit(): void {}

  selectAddress(addressToBeSet: Address){
    this.address$.pipe(take(1)).subscribe(address => {
      if(address === addressToBeSet){
        this.store.dispatch(addressActions.unsetAddress())
      } else {
        this.store.dispatch(addressActions.setAddress({address: addressToBeSet}));
      }
    })    
  }

  editAddress(address: Address){
    this.store.dispatch(addressActions.editAddress({address}));
  }

  addAddress(){
    this.store.dispatch(addressActions.enterNewAddress());
  }
  
  deleteAddress(id: number){
    this.store.dispatch(addressActions.deleteAddress({id}));
  }

}
