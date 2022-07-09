package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;

public interface AuthenticationService {

    AuthResponse login(AuthRequest authRequest);

    String signup(AuthRequest authRequest);
}
