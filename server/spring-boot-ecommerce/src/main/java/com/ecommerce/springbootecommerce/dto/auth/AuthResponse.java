package com.ecommerce.springbootecommerce.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private UserDTO user;

    private String token;

}
