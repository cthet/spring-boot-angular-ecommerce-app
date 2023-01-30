package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.service.Interfaces.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    @Autowired
    AuthenticationService authenticationService;
    @PostMapping("/sign-in")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody AuthRequest authRequest) {
        try {
            return ResponseEntity.ok(authenticationService.signin(authRequest));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@Valid @RequestBody SignupRequest signupRequest) {
        try {
            return ResponseEntity.ok(new MessageResponse(authenticationService.signup(signupRequest)));

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
}
