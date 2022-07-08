package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.dto.user.UserResponse;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.JwtUtils;
import com.ecommerce.springbootecommerce.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class AuthenticationServiceImpl {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;


    public AuthResponse login(AuthRequest authRequest) {

        User user = userRepository.findByEmail(authRequest.getEmail()).orElseThrow(() -> new ApiRequestException(("Email not found"), HttpStatus.NOT_FOUND));

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        String userRole = userPrincipal.getAuthorities().toString();
        String email = userPrincipal.getEmail();

        String jwt = jwtUtils.generateToken(email, userRole);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserResponse userResponse = new UserResponse(email,userRole);

        return new AuthResponse(jwt, "Bearer", userResponse);

    }

    public String signup(AuthRequest authRequest) {

        if (userRepository.existsByEmail(authRequest.getEmail())) {
            throw new RuntimeException("Email is already used.");
        }

        User user = new User();
        user.setEmail(authRequest.getEmail());
        user.setRoles(Collections.singleton(Role.USER));

        userRepository.save(user);

        return "User successfully registered!";

    }




}
