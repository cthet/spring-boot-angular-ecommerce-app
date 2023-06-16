package com.ecommerce.springbootecommerce.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressResponse {

    @JsonProperty("addresses")
    List<AddressDto> addresses;
}
