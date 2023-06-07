package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.CountriesResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/country")
public class CountryController {

    private final CountryService countryService;

    @GetMapping("/all")
    public ResponseEntity<CountriesResponse> getCountries(){

            return ResponseEntity.ok(countryService.fetchCountries());

    }
}
