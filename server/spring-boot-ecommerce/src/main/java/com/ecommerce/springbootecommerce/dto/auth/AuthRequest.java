package com.ecommerce.springbootecommerce.dto.auth;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class AuthRequest {

    @NotBlank(message = "email cannot be empty")
    @Email
    private String email;

    @NotBlank(message = "password cannot be empty")
    @Length(min = 8, max = 40)
    private String password;
}
