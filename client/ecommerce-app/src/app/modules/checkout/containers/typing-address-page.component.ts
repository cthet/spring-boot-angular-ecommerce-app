import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Address, AddressBuilder } from 'src/app/models/address';
import { Country } from 'src/app/models/country';
import { loadCountries } from 'src/app/modules/checkout/store/actions/country.actions';
import { selectCountries } from 'src/app/modules/checkout/store/selectors/country.selectors';
import { addressActions } from '../store/actions';
import { selectEdit, selectEditAddress } from '../store/selectors/address.selectors';

@Component({
  selector: 'app-typing-address-page',
  template: `
  <app-address-view [address]="addressForm" [edit]="edit$ | async" [editAddress]="editAddress$ | async"   [countries]="listCountries$ | async"  (save)="saveAddress()" (update)="updateAddress()" (cancel)="cancelEdit()"></app-address-view>`,
})
export class TypingAddressPageComponent implements OnInit {   
  addressForm!: FormGroup; 
  address$!: Observable<Address | null>;
  listCountries$!: Observable<Country[]>;  
  edit$!: Observable<Boolean | null>;  
  editAddress$!: Observable<Address | null>;
  
  constructor(private store: Store<Store>) {   
    this.address$ = this.store.select(selectEditAddress); 
    this.listCountries$ = this.store.select(selectCountries);
    this.edit$ = this.store.select(selectEdit);
    this.editAddress$ = this.store.select(selectEditAddress);
    this.addressForm = new FormGroup({
      civility: new FormControl(2,[Validators.required]),
      firstName:  new FormControl('',[Validators.required]),
      lastName:  new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      addressComplement: new FormControl(''),
      postCode: new FormControl('',[Validators.required]),
      city:  new FormControl('',[Validators.required]),
      country: new FormControl<Country>(new Country({}),[Validators.required, this.validCountry()]),
      phoneNumber: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)])
   })
  }

  ngOnInit(): void {
   this.store.dispatch(loadCountries());
   this.address$.pipe(take(1)).subscribe(address => {
      if(address!=null){
      this.addressForm.setValue({
        civility: address?.civility,
        firstName:  address?.firstName,
        lastName:  address?.lastName,
        street: address?.street,
        addressComplement: address?.addressComplement,
        postCode: address?.postCode,
        city: address?.city,
        country: address?.country,
        phoneNumber: address?.phoneNumber
     })
    }
    })
  }

  validCountry(): ValidatorFn {
    return (control: AbstractControl): {[reason: string]: any} | null => 
      control.value?.id != undefined ? null : {countryIsUndefined: control.value}
  }
  

  saveAddress(){
      const address = new AddressBuilder(this.addressForm.value)
                          .buildNewAddress();                          
      console.log(address);
      this.store.dispatch(addressActions.saveAddress({address: JSON.parse(JSON.stringify(address))}))      
  }      

  updateAddress(){
    this.address$.pipe(take(1)).subscribe(addressFromStore => {   
      const address = new AddressBuilder(this.addressForm.value)
                          .buildExistingAddress(addressFromStore!.id);
      this.store.dispatch(addressActions.updateAddress({address: JSON.parse(JSON.stringify(address))}))      
    });        
  }

  cancelEdit() {
    this.store.dispatch(addressActions.cancelEditAddress());
  }
  

}

