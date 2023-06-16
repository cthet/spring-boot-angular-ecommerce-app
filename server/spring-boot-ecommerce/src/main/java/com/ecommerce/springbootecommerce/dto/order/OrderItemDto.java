package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDto {

    @JsonProperty("product")
    private ProductDto productDto;

    @JsonProperty("quantity")
    private int quantity;

    @JsonProperty("amount")
    private BigDecimal amount;
}
