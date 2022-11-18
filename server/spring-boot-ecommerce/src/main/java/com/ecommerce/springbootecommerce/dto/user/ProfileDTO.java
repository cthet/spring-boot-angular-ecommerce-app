package com.ecommerce.springbootecommerce.dto.user;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ProfileDTO {

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;
}
