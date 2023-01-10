package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderDTO {

    @JsonProperty("totalQuantity")
    private int totalQuantity;

    @JsonProperty("totalPrice")
    private BigDecimal totalPrice;

    @NotNull(message = "shipping address cannot be null")
    @JsonProperty("address")
    private AddressDTO shippingAddressDTO;

    @JsonProperty("orderItems")
    private List<OrderItemDTO> orderItems;

}
