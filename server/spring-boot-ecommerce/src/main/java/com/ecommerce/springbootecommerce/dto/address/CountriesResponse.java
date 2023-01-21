package com.ecommerce.springbootecommerce.dto.address;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
public class CountriesResponse {

    @NotNull
    private List<CountryDto> countries;
}
