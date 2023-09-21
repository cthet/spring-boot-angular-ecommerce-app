import { Civility } from "./Civility";
import { Country } from "./Country";

interface AddressArgs {
  id?: number;
  civility: Civility;
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
  private args: AddressArgs;

  constructor(args: AddressArgs) {
    this.args = { ...args};
  }
  
  setId(id: number): AddressBuilder {
    this.args.id = id;
    return this;
  }

  build(): Address {
    return new Address(this.args);
  }
  
}

export class Address {
  id: number;
  civility: Civility;
  firstName: string;
  lastName: string;
  street: string;
  addressComplement: string;
  postCode: number;
  city: string;
  country: Country;
  phoneNumber: string;

  constructor(args: AddressArgs)
  {
    this.id = args.id || 0;
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

}