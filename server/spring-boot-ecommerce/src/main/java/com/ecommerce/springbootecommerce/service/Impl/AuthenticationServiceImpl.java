package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.dto.auth.UserDto;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.JwtUtils;
import com.ecommerce.springbootecommerce.security.UserDetailsImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.AuthenticationService;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final CivilityRepository civilityRepository;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final UserMapper userMapper;

    public AuthResponse signin(@Valid @RequestBody AuthRequest authRequest) {

        User user = userRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new ApiRequestException("Email not found in database!", HttpStatus.NOT_FOUND));

        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetailsImpl userDetailsimpl = (UserDetailsImpl) authentication.getPrincipal();
            Long id = userDetailsimpl.getId();
            String email = userDetailsimpl.getEmail();
            String role = userDetailsimpl.getAuthorities().toString();

            UserDto userDTO = new UserDto(id, role);

            String jwt = jwtUtils.generateToken(email, role);

            return new AuthResponse(userDTO, jwt);

        } catch(AuthenticationException e) {
            throw  new ApiRequestException("Credentials are uncorrect.", HttpStatus.FORBIDDEN);
        }
    }
    public void signup(@Valid @RequestBody SignupRequest signupRequest) {

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new ApiRequestException("Email already exists in database.", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signupRequestToUser(signupRequest);
        user.setRole(Collections.singleton(Role.USER));
        user.setPassword(encoder.encode(signupRequest.getPassword()));

        Civility civility = civilityRepository.findCivilityById(signupRequest.getCivility())
                .orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));

        user.setCivility(civility);

        userRepository.save(user);

    }
}
