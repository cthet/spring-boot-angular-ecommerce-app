package com.ecommerce.springbootecommerce.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AddressResponse {

    @JsonProperty("addresses")
    List<AddressDto> addresses;
}
