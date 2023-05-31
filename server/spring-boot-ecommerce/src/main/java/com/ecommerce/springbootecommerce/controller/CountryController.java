package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/country")
public class CountryController {


    @Autowired
    CountryRepository countryRepository;

    @Autowired
    CountryService countryService;

    @GetMapping("/all")
    public ResponseEntity<?> getCountries(){

        try {
            return ResponseEntity.ok(new CountriesResponse(countryService.fetchCountries()));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

    }
}
