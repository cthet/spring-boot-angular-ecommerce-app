package com.ecommerce.springbootecommerce.dto.address;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CountryDTO {

    @JsonProperty("id")
    private int id;

    @NotBlank
    @JsonProperty("country")
    private String country;
}
