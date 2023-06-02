import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-user-orders-view',
  templateUrl: './user-orders-view.component.html',
  styleUrls: ['./user-orders-view.component.css']
})
export class UserOrdersViewComponent {
  displayedColumns: string[] = ['orderTrackingNumber', 'shippingAddress', 'totalPrice', 'totalQuantity'];


@Input() orders!: Order[] | null;
}
