package com.ecommerce.springbootecommerce.dto.cart;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class CartDto {

    @JsonProperty("cartItems")
    private List<CartItemDto> cartItems;

    @JsonProperty("totalQuantity")
    private int totalQuantity;

    @JsonProperty("totalPrice")
    private BigDecimal totalPrice;
}