package com.ecommerce.springbootecommerce.dto.order;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderDTO {

    private BigDecimal totalPrice;

    private int totalQuantity;
}
