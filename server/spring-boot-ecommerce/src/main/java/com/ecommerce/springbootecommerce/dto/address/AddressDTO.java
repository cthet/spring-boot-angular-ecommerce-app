package com.ecommerce.springbootecommerce.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
public class AddressDTO {

    private long id;

    @JsonProperty("civility")
    private int civility;

    @NotBlank(message = "firstName cannot be blank")
    @JsonProperty("firstName")
    private String firstName;

    @NotBlank(message = "lastName cannot be blank")
    @JsonProperty("lastName")
    private String lastName;

    @NotBlank(message = "Street cannot be blank")
    @JsonProperty("street")
    private String street;

    @JsonProperty("addressComplement")
    private String addressComplement;

    @JsonProperty("postCode")
    private int postCode;

    @NotBlank(message = "City cannot be blank")
    @JsonProperty("city")
    private String city;

    @JsonProperty("country")
    private CountryDTO countryDTO;

    //regex to match 10digit with whitespace, hyphens or no space
    @NotBlank(message = "Phone number cannot be blank")
    @Pattern(regexp =  "^(\\d{2}[- ]?){5}$")
    @JsonProperty("phoneNumber")
    private String phoneNumber;


}
