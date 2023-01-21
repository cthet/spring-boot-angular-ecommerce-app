package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderItemDto {

    @JsonProperty("product")
    private ProductDto productDto;

    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("amount")
    private BigDecimal amount;
}
