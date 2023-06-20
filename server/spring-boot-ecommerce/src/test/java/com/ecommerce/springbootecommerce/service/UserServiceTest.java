package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserDetailsImpl;
import com.ecommerce.springbootecommerce.security.UserDetailsServiceImpl;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserServiceTest {


    @Autowired
    private UserServiceImpl userService;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserDetailsServiceImpl userDetailsService;

    @MockBean
    private UserMapper userMapper;

    private User testUser;
    private UserDetailsImpl userDetailsImpl;

    @BeforeEach
    void setUp() {
        testUser = new User();
        testUser.setId(1L);
        testUser.setFirstName("John");
        testUser.setLastName("Doe");
        testUser.setRole(Set.of(Role.USER));

        userDetailsImpl = UserDetailsImpl.build(testUser);
    }

    @Test
    @DisplayName("Test getUser - Success")
    void testGetUser() {

        given(userRepository.findById(testUser.getId())).willReturn(Optional.of(testUser));
        given(userDetailsService.getUserPrincipalImpl()).willReturn(userDetailsImpl);

        User actualUser = userService.getUser();

        assertEquals(testUser, actualUser);
    }

    @Test
    @DisplayName("Test getUser - Failure")
    void testGetUserFailure() {
        given(userDetailsService.getUserPrincipalImpl()).willReturn(userDetailsImpl);
        given(userRepository.findById(testUser.getId())).willReturn(Optional.empty());

        assertThrows(ApiRequestException.class, () -> userService.getUser());

        verify(userDetailsService).getUserPrincipalImpl();
        verify(userRepository).findById(testUser.getId());
    }
}
