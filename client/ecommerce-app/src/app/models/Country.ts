interface CountryArgs {
  id?: number;
  country?: string;
  code?: string;
}

export class Country {
  id?: number;
  country?: string;
  code?: string;
  
  constructor(args: CountryArgs){
    this.id = args.id;
    this.country = args.country;
    this.code = args.code;
  }
}