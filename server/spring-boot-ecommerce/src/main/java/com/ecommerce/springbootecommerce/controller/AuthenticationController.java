package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.MessageResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins ="*", maxAge = 3600)
@RestController
@RequestMapping
public class AuthenticationController {

    @Autowired
    AuthenticationService authenticationService;


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody AuthRequest authRequest) {
        try {
            return ResponseEntity.ok(authenticationService.login(authRequest));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@Valid @RequestBody AuthRequest authRequest) {
        try {
            return ResponseEntity.ok(new MessageResponse(authenticationService.signup(authRequest)));

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }


}
