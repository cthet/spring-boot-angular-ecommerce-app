package com.ecommerce.springbootecommerce.dto.order;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class OrderResponse {

    @JsonProperty("orders")
    private List<OrderDto> orderDtos;


}
