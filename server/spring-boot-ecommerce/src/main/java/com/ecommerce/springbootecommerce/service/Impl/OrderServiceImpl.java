package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Customer;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.dto.OrderDTO;
import com.ecommerce.springbootecommerce.dto.OrderRequest;
import com.ecommerce.springbootecommerce.dto.OrderResponse;
import com.ecommerce.springbootecommerce.repository.CustomerRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public OrderResponse registerOrder(OrderRequest orderRequest) {

        Order order = new Order();

        order.setCustomer(orderRequest.getCustomer());
        order.setOrderItems(orderRequest.getOrderItems());
        order.setShippingAddress(orderRequest.getShippingAddress());

        OrderDTO orderDTO = orderRequest.getOrderDTO();
        order.setTotalQuantity(orderDTO.getTotalQuantity());
        order.setTotalPrice(orderDTO.getTotalPrice());

        String email = orderRequest.getCustomer().getEmail();

        //register the order in DB
        Customer CustomerInDB = customerRepository.findByEmail(email);
        if(CustomerInDB != null) {
            CustomerInDB.addOrder(order);
            customerRepository.save(CustomerInDB);
        }

        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setOrderTrackingNumber(order.getOrderTrackingNumber());

        return orderResponse;
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
