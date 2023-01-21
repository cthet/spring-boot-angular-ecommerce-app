package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @NotEmpty(message = "id cannot be empty")
    private Long id;

    @NotBlank(message = "role cannot be blank")
    private String role;
}
