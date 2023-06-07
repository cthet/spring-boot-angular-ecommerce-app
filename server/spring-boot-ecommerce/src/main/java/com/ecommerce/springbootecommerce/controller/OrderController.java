package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/order")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/register")
    public ResponseEntity<OrderDto> saveOrder(@Valid @RequestBody OrderDto orderDTO) {
            return new ResponseEntity<>(orderService.saveOrder(orderDTO), HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<OrderResponse> getOrders() {
            return new ResponseEntity<>(orderService.fetchUserOrders(), HttpStatus.OK);
    }

}
