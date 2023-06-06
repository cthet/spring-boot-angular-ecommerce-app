package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;

public interface AuthenticationService {

    AuthResponse signin(AuthRequest authRequest);

    void signup(SignupRequest signupRequest);
}
