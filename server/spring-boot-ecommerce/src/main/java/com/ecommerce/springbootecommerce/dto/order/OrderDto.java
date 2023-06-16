package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

    private Long id;

    @JsonProperty("orderTrackingNumber")
    private String orderTrackingNumber;

    @JsonProperty("date")
    private Date dateCreated;

    @JsonProperty("shippingAddress")
    private AddressDto addressDto;

    @JsonProperty("orderItems")
    private List<OrderItemDto> orderItems;

    @JsonProperty("totalQuantity")
    private int totalQuantity;

    @JsonProperty("totalPrice")
    private BigDecimal totalPrice;

}
