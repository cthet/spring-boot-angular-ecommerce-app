package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.address.CountryDto;

import java.util.List;

public interface CountryService {

    List<CountryDto> fetchCountries();
}
