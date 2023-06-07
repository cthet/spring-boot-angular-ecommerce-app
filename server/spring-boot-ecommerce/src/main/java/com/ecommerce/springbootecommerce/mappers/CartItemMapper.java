package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public interface CartItemMapper {

    @Mapping(source = "product", target = "productDto")
    CartItemDto cartItemToCartItemDto(CartItem cartItem);

    List<CartItemDto> cartItemsToCartItemsDto(List<CartItem> cartItems);

    @Mapping(source = "productDto", target = "product")
    CartItem cartItemDtoToCartItem(CartItemDto cartItemDto);

}
