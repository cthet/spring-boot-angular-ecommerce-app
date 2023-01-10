package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.dto.address.CountryDTO;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CountryController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CountryRepository countryRepository;
    @GetMapping("/countries")
    public ResponseEntity<?> getCountries(){

        try {
            List<Country> countries = countryRepository.findAll();
            List<CountryDTO> countriesDTO = new ArrayList<CountryDTO>();

            countries.forEach(country -> {
                CountryDTO countryDTO = new CountryDTO();
                countryDTO.setId(country.getId());
                countryDTO.setCountry(country.getName());
                countriesDTO.add(countryDTO);
            });

            return ResponseEntity.ok(new CountriesResponse(countriesDTO));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

    }
}
