package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.AuthRequest;
import com.ecommerce.springbootecommerce.dto.auth.AuthResponse;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.JwtUtils;
import com.ecommerce.springbootecommerce.security.UserDetailsImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AuthenticationServiceTest {


    @MockBean
    private UserRepository userRepository;

    @MockBean
    private AuthenticationManager authenticationManager;

    @MockBean
    private JwtUtils jwtUtils;

    @MockBean
    private UserMapper userMapper;

    @MockBean
    private CivilityRepository civilityRepository;

    @Autowired
    private AuthenticationService authenticationService;



    private User testUser;
    private AuthRequest testAuthRequest;
    private String testToken;
    private String testRole;
    private UserDetailsImpl testUserDetailsImpl;
    private Authentication testAuth;
    private Civility testCivility;

    private SignupRequest testSignupRequest;

    @BeforeEach
    void setUp(){
        testUser = new User();
        testUser.setEmail("test@gmail.com");
        testUser.setPassword("password");
        testUser.setRole(Set.of(Role.USER));

        testCivility = new Civility();
        testCivility.setId(1);
        testCivility.setName("male");
        testCivility.setUsers(Set.of(testUser));
        testUser.setCivility(testCivility);

        testAuthRequest = new AuthRequest();
        testAuthRequest.setEmail("test@gmail.com");
        testAuthRequest.setPassword("password");

        testSignupRequest = new SignupRequest();
        testSignupRequest.setEmail("test@gmail.com");
        testSignupRequest.setPassword("password");
        testSignupRequest.setFirstName("John");
        testSignupRequest.setLastName("Doe");
        testSignupRequest.setCivility(1);

        testToken = "testToken";
        testRole = "USER";

        testUserDetailsImpl = new UserDetailsImpl(1L, "test@gmail.com", "password", Collections.singletonList(new SimpleGrantedAuthority(testRole)));
        testAuth = new UsernamePasswordAuthenticationToken(testUserDetailsImpl, null, testUserDetailsImpl.getAuthorities());

    }

    @Test
    @DisplayName("Test signIn - Success")
    void TestSignInSuccess() {
        given(userRepository.findByEmail(testAuthRequest.getEmail())).willReturn(Optional.of(testUser));
        given(authenticationManager.authenticate(any())).willReturn(testAuth);

        given(jwtUtils.generateToken(testAuthRequest.getEmail(), testUserDetailsImpl.getAuthorities().toString())).willReturn(testToken);

        AuthResponse response = authenticationService.signin(testAuthRequest);

        assertEquals(response.getToken(), testToken);

    }

    @Test
    @DisplayName("Test signIn - Failure - Email not found")
    void TestSignInFailureEmailNotFound() {
        given(userRepository.findByEmail(testAuthRequest.getEmail())).willReturn(Optional.empty());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> authenticationService.signin(testAuthRequest));

        assertEquals("Email not found in database!", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

    }

    @Test
    @DisplayName("Test signIn - Failure - Credentials are uncorrect")
    void TestSignInFailureCredentialsIncorrect() {
        given(userRepository.findByEmail(testAuthRequest.getEmail())).willReturn(Optional.of(testUser));
        given(authenticationManager.authenticate(any())).willThrow(new AuthenticationException("Test error") {});

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> authenticationService.signin(testAuthRequest));

        assertEquals("Credentials are uncorrect.", exception.getMessage());
        assertEquals(HttpStatus.FORBIDDEN, exception.getStatus());

    }

    @Test
    @DisplayName("Test signUp - Success")
    void TestSignUpSuccess() {
        given(userRepository.existsByEmail(testAuthRequest.getEmail())).willReturn(false);
        given(userMapper.signupRequestToUser(testSignupRequest)).willReturn(testUser);
        given(civilityRepository.findCivilityById(testSignupRequest.getCivility())).willReturn(Optional.of(testCivility));

        authenticationService.signup(testSignupRequest);

        verify(userRepository, times(1)).save(any(User.class));

    }

    @Test
    @DisplayName("Test signUp - Failure - Email already exists")
    void TestSignUpFailureEmailExists() {
        given(userRepository.existsByEmail(testAuthRequest.getEmail())).willReturn(true);
        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> authenticationService.signup(testSignupRequest));

        assertEquals("Email already exists in database.", exception.getMessage());
        assertEquals(HttpStatus.CONFLICT, exception.getStatus());

    }

    @Test
    @DisplayName("Test signUp - Success - Civility not found")
    void TestSignUpFailureCivilityNotFound() {
        given(userRepository.existsByEmail(testAuthRequest.getEmail())).willReturn(false);
        given(userMapper.signupRequestToUser(testSignupRequest)).willReturn(testUser);
        given(civilityRepository.findCivilityById(testSignupRequest.getCivility())).willReturn(Optional.empty());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> authenticationService.signup(testSignupRequest));

        assertEquals("Civility not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

    }


}
