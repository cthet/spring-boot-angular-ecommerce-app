package com.ecommerce.springbootecommerce.dto.address;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CountriesResponse {

    @NotNull
    private List<CountryDto> countries;
}
