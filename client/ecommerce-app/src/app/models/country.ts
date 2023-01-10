interface CountryArgs {
  id?: number;
  country?: string;
}


export class Country {
  id?: number;
  country?: string;

  
  constructor(args: CountryArgs){
    this.id = args.id;
    this.country = args.country;
  }
}