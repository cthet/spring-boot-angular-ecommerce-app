package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderRequest;

public interface CheckoutService {

    String  saveOrder(OrderRequest orderRequest);

}
