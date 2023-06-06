export interface CivilityArgs {
  id?: number;
  name?: string;
}


export class Civility {
  id?: number;
  name?: string;
  
  constructor(args: CivilityArgs) {
    this.id = args.id;
    this.name = args.name;
   }
}