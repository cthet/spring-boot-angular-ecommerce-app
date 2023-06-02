package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;

public interface OrderService {

    OrderDto saveOrder(OrderDto order);

    OrderResponse fetchUserOrders();

}
