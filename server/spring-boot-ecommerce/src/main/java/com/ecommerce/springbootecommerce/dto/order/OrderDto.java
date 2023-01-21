package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderDto {

    @JsonProperty("orderTrackingNumber")
    private String orderTrackingNumber;


    @JsonProperty("shippingAddress")
    private AddressDto shippingAddressDto;

    @JsonProperty("orderItems")
    private List<OrderItemDto> orderItems;

    @JsonProperty("totalQuantity")
    private int totalQuantity;

    @JsonProperty("totalPrice")
    private BigDecimal totalPrice;

}
