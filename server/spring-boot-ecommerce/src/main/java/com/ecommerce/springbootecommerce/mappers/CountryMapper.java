package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CountryMapper {


    List<CountryDto> countriesToCountriesDto(List<Country> countries);


}
