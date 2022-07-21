package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.service.Interfaces.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    CheckoutService checkoutService;

    @PostMapping("/register")
    public ResponseEntity<MessageResponse> saveOrder(@Valid @RequestBody OrderRequest orderRequest) {
        try {

            return new ResponseEntity<>(new MessageResponse(checkoutService.saveOrder(orderRequest)), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
