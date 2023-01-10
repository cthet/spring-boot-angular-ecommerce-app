import { Address } from "../../../models/address";
import { Order } from "../../cart/models/order";


export class Profile {
  firstName!: string;
  lastName!: string;
  email!: string;
  orders!: Order[];
  billingAdresses!: Address[];
  shippingAdress!: Address[];
}
