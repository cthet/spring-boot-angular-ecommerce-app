package com.ecommerce.springbootecommerce.dto;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Customer;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.domain.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class OrderResponse {

    private String orderTrackingNumber;

    private Address shippingAdress;

    private Customer customer;

    private Order order;

    private Set<OrderItem> orderItems;


}
