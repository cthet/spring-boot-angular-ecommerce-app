package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.mappers.CountryMapper;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountryServiceImpl implements CountryService {

    @Autowired
    CountryRepository countryRepository;

    private final CountryMapper countryMapper;

    @Override
    public List<CountryDto> fetchCountries() {


        List<CountryDto> countriesDto = countryMapper.countriesToCountriesDto(countryRepository.findAll());

        return countriesDto;
    }
}
