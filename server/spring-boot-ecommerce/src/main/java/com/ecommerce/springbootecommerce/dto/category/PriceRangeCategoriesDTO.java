package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
public class PriceRangeCategoriesDTO {

    @JsonProperty("price_range_categories")
    private Set<PriceRangeCategoryDTO> priceRangeCategoryDTOS;


}
