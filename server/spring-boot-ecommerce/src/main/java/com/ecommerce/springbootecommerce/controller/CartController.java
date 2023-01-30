package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/user")
    public ResponseEntity<?> getCartByUser() {
        try {
            return new ResponseEntity<>(cartService.getCartDTO(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<?> saveUserCart(@Valid @RequestBody CartDto cartDTO) {
        try {
            return new ResponseEntity<>(new MessageResponse(cartService.saveCart(cartDTO)), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
