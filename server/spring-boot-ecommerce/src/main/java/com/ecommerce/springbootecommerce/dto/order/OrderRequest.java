package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.OrderItem;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.order.OrderDTO;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
public class OrderRequest {

    @NotNull(message = "user cannot be empty")
    private User user;

    @NotNull(message = "shipping address cannot be empty")
    private Address shippingAddress;

    @NotNull(message = "order cannot be empty")
    private OrderDTO orderDTO;

    @NotNull(message = "order items cannot be empty")
    private Set<OrderItem> orderItems;
}
