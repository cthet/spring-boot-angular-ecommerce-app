package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CountryController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CountryService countryService;
    @GetMapping("/countries")
    public ResponseEntity<?> getCountries(){

        try {
            return ResponseEntity.ok(new CountriesResponse(countryService.fetchCountries()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

    }
}
