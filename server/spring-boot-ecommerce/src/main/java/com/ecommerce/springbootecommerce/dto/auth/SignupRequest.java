package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
public class SignupRequest {

    @NotBlank(message = "firstName cannot be blank")
    @NotEmpty(message = "firstName cannot be empty")
    private String firstName;

    @NotBlank(message = "lastName cannot be blank")
    @NotEmpty(message = "lastName cannot be empty")
    private String lastName;

    @NotBlank(message = "email cannot be blank")
    @NotEmpty(message = "email cannot be empty")
    @Email(message = "email is not valid")
    private String email;

    @NotBlank(message = "email cannot be blank")
    @Length(min = 8, max = 40)
    private String password;
}
