package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;

public interface OrderService {

    OrderResponse registerOrder(OrderRequest orderRequest);
}
