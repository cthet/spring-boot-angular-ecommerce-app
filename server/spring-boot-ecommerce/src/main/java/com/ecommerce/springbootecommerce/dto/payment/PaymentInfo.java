package com.ecommerce.springbootecommerce.dto.payment;

import lombok.Data;

@Data
public class PaymentInfo {

    private int amount;
    private String currency;
}
