import { Country } from "./country";


interface AddressArgs {
  civility: number;
  firstName: string;
  lastName: string;
  street: string;
  addressComplement: string;
  postCode: number;
  city: string;
  country: Country;
  phoneNumber: string;
}

export class AddressBuilder {
  id!: number;
  civility: number;
  firstName: string;
  lastName: string;
  street: string;
  addressComplement: string;
  postCode: number;
  city: string;
  country: Country;
  phoneNumber: string;

  constructor(args: AddressArgs) {
    this.civility = args.civility;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.street = args.street;
    this.addressComplement = args.addressComplement;
    this.postCode = args.postCode;
    this.city = args.city;
    this.country = args.country;
    this.phoneNumber = args.phoneNumber;
  }
  
  private setId(id: number){
    this.id = id;
    return this;
  }

  buildNewAddress(){
    this.setId(0);
    return this.build();
  }

  buildExistingAddress(id: number){
    this.setId(id);
    return this.build();
  }

  build() {
    return new Address(
      this.id,
      this.civility,
      this.firstName,
      this.lastName,
      this.street,
      this.addressComplement,
      this.postCode,
      this.city,
      this.country,
      this.phoneNumber,
    );
  }
  
}

export class Address {
  id: number;
  civility: number;
  firstName: string;
  lastName: string;
  street: string;
  addressComplement: string;
  postCode: number;
  city: string;
  country: Country;
  phoneNumber: string;

  constructor(id: number, civility: number, firstName: string, lastName: string, street: string, addressComplement: string, postCode: number, city: string, country: Country, phoneNumber: string)
  {
    this.id = id;
    this.civility = civility;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.addressComplement = addressComplement;
    this.postCode = postCode;
    this.city = city;
    this.country = country;
    this.phoneNumber = phoneNumber;
  } 

}