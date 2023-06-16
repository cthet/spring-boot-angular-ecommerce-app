package com.ecommerce.springbootecommerce.dto.cart;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDto {

    @JsonProperty("product")
    private ProductDto productDto;

    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("amount")
    private BigDecimal amount;

}
