package com.ecommerce.springbootecommerce.dto.auth;

import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class SignupRequest {

    @NotNull(message = "civility cannot be null")
    private CivilityDto civility;

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
