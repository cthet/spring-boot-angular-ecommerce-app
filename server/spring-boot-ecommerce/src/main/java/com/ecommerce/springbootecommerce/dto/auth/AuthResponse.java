package com.ecommerce.springbootecommerce.dto.auth;

import com.ecommerce.springbootecommerce.dto.user.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private String token;

    private String type;

    private UserResponse user;

}
