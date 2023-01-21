package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderDto;

import java.util.List;

public interface OrderService {

    OrderDto saveOrder(OrderDto order);

    List<OrderDto> fetchOrders();

}
