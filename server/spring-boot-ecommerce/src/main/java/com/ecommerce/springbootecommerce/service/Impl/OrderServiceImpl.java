package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.dto.order.OrderDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    UserRepository userRepository;

    @Override
    public OrderResponse registerOrder(OrderRequest orderRequest) {

        Order order = new Order();

        order.setUser(orderRequest.getUser());
        order.setOrderItems(orderRequest.getOrderItems());
        order.setShippingAddress(orderRequest.getShippingAddress());

        OrderDTO orderDTO = orderRequest.getOrderDTO();
        order.setTotalQuantity(orderDTO.getTotalQuantity());
        order.setTotalPrice(orderDTO.getTotalPrice());

        String email = orderRequest.getUser().getEmail();

        //register the order in DB
        User userFromDB = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        userFromDB.addOrder(order);
        userRepository.save(userFromDB);

        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setOrderTrackingNumber(order.getOrderTrackingNumber());

        return orderResponse;
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
