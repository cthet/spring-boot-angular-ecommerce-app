package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = CartItemMapper.class)
public interface CartMapper {

    @Mapping(target = "cartItems", ignore = true)
    CartDto cartToCartDto(Cart cart);

    @Mapping(target = "cartItems", ignore = true)
    Cart cartDtoToCart(CartDto cartDto);
}
