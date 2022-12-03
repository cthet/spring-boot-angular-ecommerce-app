package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.cart.CartDTO;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/user")
    public ResponseEntity<?> getCartByUser() {
        try {
            CartDTO cartDTO = cartService.getCartFromUser();

            return new ResponseEntity<>(cartDTO, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<?> saveUserCart(@Valid @RequestBody CartDTO cartDTO) {
        try {

            return new ResponseEntity<>(new MessageResponse(cartService.saveCartUser(cartDTO)), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
