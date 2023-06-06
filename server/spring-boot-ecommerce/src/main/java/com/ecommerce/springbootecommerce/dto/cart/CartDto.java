package com.ecommerce.springbootecommerce.dto.cart;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDto {

    @JsonProperty("cartItems")
    private List<CartItemDto> cartItems = new ArrayList<>();

    @JsonProperty("totalQuantity")
    private int totalQuantity;

    @JsonProperty("totalPrice")
    private BigDecimal totalPrice;

    public void addCartItemDto(CartItemDto cartItemDto) {
        if(cartItemDto != null) {
            cartItems.add(cartItemDto);
        }
    }
}
