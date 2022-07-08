package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(origins ="*", maxAge = 3600)
@RestController
public class AuthenticationController {



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody AuthRequest authRequest) {
        try {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));


    } catch (Exception e) {
            return new ResponseEntity<Exception>(e, HttpStatus.BAD_REQUEST);
        }
}
