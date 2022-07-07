package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ApparelCategoryDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("apparel_category")
    private String category;

}
