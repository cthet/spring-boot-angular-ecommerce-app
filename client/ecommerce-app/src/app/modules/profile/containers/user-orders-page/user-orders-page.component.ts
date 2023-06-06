import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { orderActions } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { orderSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-user-orders-page',
  template: `<app-user-orders-view [orders]="orders$ | async"></app-user-orders-view>`,
})
export class UserOrdersPageComponent implements OnInit{
  orders$!: Observable<Order[]>;

  constructor(private store: Store<Store>) {
    this.orders$ = this.store.select(orderSelectors.selectAllOrders);
  }

  ngOnInit(): void {
    this.store.dispatch(orderActions.loadOrders());    
  }




}
