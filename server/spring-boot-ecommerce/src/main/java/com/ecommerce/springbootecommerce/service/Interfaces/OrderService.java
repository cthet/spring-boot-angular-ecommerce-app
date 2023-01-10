package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderDTO;

import java.util.List;

public interface OrderService {

    String  saveOrder(OrderDTO order);

    List<OrderDTO> fetchOrders();

}
