package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.cart.CartDto;

public interface CartService {

    CartDto getCartDTO();

    void saveCart(CartDto cartDTO);


}
