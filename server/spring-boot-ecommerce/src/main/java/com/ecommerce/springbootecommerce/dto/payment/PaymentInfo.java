package com.ecommerce.springbootecommerce.dto.payment;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PaymentInfo {

    @JsonProperty("totalPrice")
    private Long amount;

    private String currency;
}
