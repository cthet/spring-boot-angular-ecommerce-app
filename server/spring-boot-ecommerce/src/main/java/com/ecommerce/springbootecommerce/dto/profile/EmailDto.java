package com.ecommerce.springbootecommerce.dto.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDto {

    @NotBlank(message = "Email cannot be blank")
    @Email
    private String email;
}
