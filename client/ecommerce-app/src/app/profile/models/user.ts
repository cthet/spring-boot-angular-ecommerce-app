import { Address } from "src/app/cart/models/address";
import { Order } from "src/app/cart/models/order";

export class Profile {
  firstName!: string;
  lastName!: string;
  email!: string;
  orders!: Order[];
  billingAdresses!: Address[];
  shippingAdress!: Address[];
}
