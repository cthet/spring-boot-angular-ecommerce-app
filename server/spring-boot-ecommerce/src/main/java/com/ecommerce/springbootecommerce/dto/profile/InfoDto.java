package com.ecommerce.springbootecommerce.dto.profile;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InfoDto {

    @JsonProperty("civility")
    private CivilityDto civilityDto;

    @NotBlank(message = "First name cannot be blank")
    private String firstName;

    @NotBlank(message = "First name cannot be blank")
    private String lastName;

}
