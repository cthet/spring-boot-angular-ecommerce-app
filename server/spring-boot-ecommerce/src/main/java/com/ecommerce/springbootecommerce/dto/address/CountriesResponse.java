package com.ecommerce.springbootecommerce.dto.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CountriesResponse {

    @NotNull
    private List<CountryDto> countries;
}
