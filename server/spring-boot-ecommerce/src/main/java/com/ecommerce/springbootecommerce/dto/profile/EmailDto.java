package com.ecommerce.springbootecommerce.dto.profile;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDto {

    @NotBlank(message = "Email cannot be blank")
    @Email
    private String email;
}
