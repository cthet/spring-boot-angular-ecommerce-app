package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/register")
    public ResponseEntity<OrderResponse> registerOrder(@RequestBody OrderRequest orderRequest) {
        try {
            OrderResponse orderResponse = orderService.registerOrder(orderRequest);

            return new ResponseEntity<>(orderResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
