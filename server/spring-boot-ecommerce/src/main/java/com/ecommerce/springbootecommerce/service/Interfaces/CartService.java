package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.cart.CartDTO;

public interface CartService {

    CartDTO getCartDTO();

    String saveCart(CartDTO cartDTO);

}
