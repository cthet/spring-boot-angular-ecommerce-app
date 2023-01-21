package com.ecommerce.springbootecommerce.dto.cart;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CartItemDto {

    @JsonProperty("item")
    private ProductDto productDTO;

    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("amount")
    private BigDecimal amount;

}
