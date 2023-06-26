package com.ecommerce.springbootecommerce.dto.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    @JsonProperty("user")
    private UserDto user;

    @NotBlank(message = "token cannot be blank")
    private String token;

}
