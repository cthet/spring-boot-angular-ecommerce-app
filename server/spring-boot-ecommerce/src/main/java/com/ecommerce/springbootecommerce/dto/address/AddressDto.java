package com.ecommerce.springbootecommerce.dto.address;

import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {

    private long id;

    @JsonProperty("civility")
    private CivilityDto civilityDto;

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
    private CountryDto countryDto;

    //regex to match 10digit with whitespace, hyphens or no space
    @NotBlank(message = "Phone number cannot be blank")
    @Pattern(regexp =  "^(\\d{2}[- ]?){5}$")
    @JsonProperty("phoneNumber")
    private String phoneNumber;

}
