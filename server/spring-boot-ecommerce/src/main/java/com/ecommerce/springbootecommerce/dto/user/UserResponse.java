package com.ecommerce.springbootecommerce.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {

    private String email;

    private String role;

}
