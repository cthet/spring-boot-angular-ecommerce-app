package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.OrderRequest;
import com.ecommerce.springbootecommerce.dto.OrderResponse;

public interface OrderService {

    OrderResponse registerOrder(OrderRequest orderRequest);
}
