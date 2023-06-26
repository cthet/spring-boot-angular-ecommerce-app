package com.ecommerce.springbootecommerce.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    @NotNull(message = "civility cannot be null")
    private int civility;

    @NotBlank(message = "firstName cannot be blank")
    private String firstName;

    @NotBlank(message = "lastName cannot be blank")
    private String lastName;

    @NotBlank(message = "email cannot be blank")
    @Email(message = "email is not valid")
    private String email;

    @NotBlank(message = "password cannot be blank")
    @Length(min = 8, max = 40)
    private String password;
}
