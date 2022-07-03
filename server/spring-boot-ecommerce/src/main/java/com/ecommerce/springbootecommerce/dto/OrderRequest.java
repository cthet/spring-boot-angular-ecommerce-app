package com.ecommerce.springbootecommerce.dto;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Customer;
import com.ecommerce.springbootecommerce.domain.OrderItem;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
public class OrderRequest {

    @NotNull(message = "customer cannot be empty")
    private Customer customer;

    @NotNull(message = "shipping address cannot be empty")
    private Address shippingAddress;

    @NotNull(message = "order cannot be empty")
    private OrderDTO orderDTO;

    @NotNull(message = "order items cannot be empty")
    private Set<OrderItem> orderItems;
}
