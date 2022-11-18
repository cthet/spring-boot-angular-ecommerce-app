package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
public class AuthRequest {

    @NotBlank(message = "email cannot be blank")
    @NotEmpty(message = "email cannot be empty")
    @Email
    private String email;


    @NotBlank(message = "email cannot be blank")
    @Length(min = 8, max = 40)
    private String password;
}
