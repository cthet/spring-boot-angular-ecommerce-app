package com.ecommerce.springbootecommerce.dto.profile;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class EmailDto {

    @NotBlank(message = "Email cannot be blank")
    @Email
    private String email;
}
