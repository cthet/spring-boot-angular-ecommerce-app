package com.ecommerce.springbootecommerce.dto.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InfoDTO {

    private int civility;

    @NotBlank(message = "First name cannot be blank")
    private String firstName;

    @NotBlank(message = "First name cannot be blank")
    private String lastName;

}
