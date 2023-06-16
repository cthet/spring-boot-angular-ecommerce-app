package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public interface CartItemMapper {

    @Mapping(source = "product", target = "productDto")
    CartItemDto cartItemToCartItemDto(CartItem cartItem);

    @Mapping(source = "productDto", target = "product")
    @Mapping(ignore = true, target = "id")
    @Mapping(ignore = true, target = "cart")
    CartItem cartItemDtoToCartItem(CartItemDto cartItemDto);

}
