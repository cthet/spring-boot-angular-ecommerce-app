package com.ecommerce.springbootecommerce.dto.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class AuthResponse {

    @JsonProperty("user")
    private UserDto user;

    @NotBlank(message = "token cannot be blank")
    private String token;

}
