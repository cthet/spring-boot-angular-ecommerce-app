package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins ="*", maxAge = 3600)
public interface AuthenticationService {

    AuthResponse login(AuthRequest authRequest);

    String signup(AuthRequest authRequest);
}
