package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.user.UserDTO;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class OrderRequest {

    @NotNull(message = "user cannot be empty")
    private UserDTO user;

    @NotNull(message = "shipping address cannot be empty")
    private AddressDTO shippingAddress;

    @NotNull(message = "order cannot be empty")
    private OrderDTO order;

    @NotNull(message = "order items cannot be empty")
    private List<OrderItemDTO> orderItems;
}
