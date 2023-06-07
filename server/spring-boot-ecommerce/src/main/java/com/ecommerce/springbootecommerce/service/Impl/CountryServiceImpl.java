package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.mappers.CountryMapper;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;
    private final CountryMapper countryMapper;

    @Override
    public CountriesResponse fetchCountries() {

        List<Country> countries = countryRepository.findAll();

        List<CountryDto> countriesDto = countryMapper.countriesToCountriesDto(countries);

        CountriesResponse countriesResponse = new CountriesResponse(countriesDto);

        return countriesResponse;
    }
}
