package com.ecommerce.springbootecommerce.dto.cart;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CartItemDTO {

    @JsonProperty("item")
    private ProductDTO productDTO;

    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("amount")
    private BigDecimal amount;

}
