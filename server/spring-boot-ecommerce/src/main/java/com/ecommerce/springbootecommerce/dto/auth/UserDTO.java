package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
public class UserDTO {

    @NotEmpty(message = "id cannot be empty")
    private Long id;

    @NotBlank(message = "role cannot be blank")
    private String role;
}
