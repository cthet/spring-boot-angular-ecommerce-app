package com.ecommerce.springbootecommerce.dto.auth;

import com.ecommerce.springbootecommerce.dto.User.UserResponse;
import lombok.Data;

@Data
public class AuthResponse {

    private String token;

    private String type = "Bearer";

    private UserResponse user;

}
