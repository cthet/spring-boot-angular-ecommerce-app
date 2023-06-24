package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.mappers.CountryMapper;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CountryServiceTest {

    @MockBean
    CountryRepository countryRepository;

    @MockBean
    CountryMapper countryMapper;

    @Autowired
    CountryService countryService;

    private Country testCountry;
    private CountryDto testCountryDto;

    @BeforeEach
    void setup() {
        testCountry = new Country();
        testCountry.setId(1);
        testCountry.setName("France");
        testCountry.setCode("FR");

        testCountryDto = new CountryDto();
        testCountryDto.setId(1);
        testCountryDto.setName("France");
        testCountryDto.setCode("FR");
    }

    @Test
    @DisplayName("Test fetchCountries - Success")
    void testFetchCountriesSuccess() throws Exception {
        given(countryRepository.findAll()).willReturn(List.of(testCountry));
        given(countryMapper.countriesToCountriesDto(List.of(testCountry))).willReturn(List.of(testCountryDto));

        CountriesResponse countriesResponse = countryService.fetchCountries();
        assertEquals(countriesResponse.getCountries(), List.of(testCountryDto));
    }

}
