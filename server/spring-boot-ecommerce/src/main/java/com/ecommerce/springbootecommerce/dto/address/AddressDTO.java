package com.ecommerce.springbootecommerce.dto.address;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class AddressDTO {

    @NotBlank(message = "Country cannot be empty")
    private  String country;

    @NotNull(message = "Post Code cannot be empty")
    private int postCode;

    @NotBlank(message = "City cannot be empty")
    private String city;

    @NotBlank(message = "Street cannot be empty")
    private String street;
}
