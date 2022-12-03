package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.dto.auth.UserDTO;
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

    public AuthResponse signin(@Valid @RequestBody AuthRequest authRequest) {

        User user = userRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new ApiRequestException("Email not found in database!", HttpStatus.NOT_FOUND));

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            Long id = userPrincipal.getId();
            String role = userPrincipal.getAuthorities().toString();
            String email = userPrincipal.getEmail();

            UserDTO userDTO = new UserDTO(id, email, role);

            String jwt = jwtUtils.generateToken(email, role);

            return new AuthResponse(userDTO, jwt);

        } catch(AuthenticationException e) {
            throw  new ApiRequestException("Credentials are uncorrect.", HttpStatus.FORBIDDEN);
        }
    }
    public String signup(@Valid @RequestBody SignupRequest signupRequest) {

            if (userRepository.existsByEmail(signupRequest.getEmail())) {
                throw new ApiRequestException("Email already exists in database.", HttpStatus.BAD_REQUEST);
            }

            User user = new User();
            user.setFirstName(signupRequest.getFirstName());
            user.setLastName(signupRequest.getLastName());
            user.setEmail(signupRequest.getEmail());
            user.setRole(Collections.singleton(Role.USER));
            user.setPassword(encoder.encode(signupRequest.getPassword()));

            userRepository.save(user);

            return "User registered successfully.";
    }
}
