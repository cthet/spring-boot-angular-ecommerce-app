package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/cart")
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<CartDto> getCartByUser() {
            return new ResponseEntity<>(cartService.getCartDTO(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> saveUserCart(@Valid @RequestBody CartDto cartDTO) {
            cartService.saveCart(cartDTO);
            return new ResponseEntity<>(HttpStatus.OK);
    }

}
