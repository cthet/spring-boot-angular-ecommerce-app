package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PriceRangeCategoriesDTO {

    @JsonProperty("price_range_categories")
    List<PriceRangeCategoryDTO> priceRangeCategoryDTOS;


}
