package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.JwtUtils;
import com.ecommerce.springbootecommerce.security.UserPrincipal;
import com.ecommerce.springbootecommerce.service.Interfaces.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.Collections;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;

    public AuthResponse login(@Valid @RequestBody AuthRequest authRequest) {

        User user = userRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new ApiRequestException("Email not found in database!", HttpStatus.NOT_FOUND));

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            String role = userPrincipal.getAuthorities().toString();
            String email = userPrincipal.getEmail();

            String jwt = jwtUtils.generateToken(email, role);

            return new AuthResponse(jwt, email, role);

        } catch(AuthenticationException e) {
            throw  new ApiRequestException("Password is invalid.", HttpStatus.FORBIDDEN);
        }
    }
    public String signup(@Valid @RequestBody AuthRequest authRequest) {

            if (userRepository.existsByEmail(authRequest.getEmail())) {
                throw new ApiRequestException("Email is already used.", HttpStatus.BAD_REQUEST);
            }

            User user = new User();
            user.setEmail(authRequest.getEmail());
            user.setRole(Collections.singleton(Role.USER));
            user.setPassword(encoder.encode(authRequest.getPassword()));

            userRepository.save(user);

            return "User successfully registered!";
    }
}
