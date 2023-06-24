package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CivilityService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CivilityServiceTest {

    @Autowired
    CivilityService civilityService;

    @MockBean
    CivilityRepository civilityRepository;

    private Civility testCivility;

    @BeforeEach
    void setup(){
        testCivility = new Civility();
        testCivility.setId(1);
        testCivility.setName("male");
    }

    @Test
    @DisplayName("test getCivilityById - Success")
    void testGetCivilityByIdSuccess(){
        given(civilityRepository.findCivilityById(1)).willReturn(Optional.of(testCivility));

        Civility civility = civilityService.getCivilityById(1);

        assertEquals(testCivility, civility);
    }

    @Test
    @DisplayName("test getCivilityById - Failure - Civility not found")
    void testGetCivilityByIdFailure_NotFound(){
        given(civilityRepository.findCivilityById(1)).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> {
            civilityService.getCivilityById(1);
        });

        String expectedMessage = "civility not found";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));
    }

}
