package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthRequest {

    @NotBlank(message = "email cannot be blank")
    @Email
    private String email;


    @NotBlank(message = "password cannot be blank")
    @Length(min = 8, max = 40)
    private String password;
}
