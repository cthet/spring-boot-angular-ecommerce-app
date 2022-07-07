package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PriceRangeCategoryDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("price_range_category")
    private String category;

}
