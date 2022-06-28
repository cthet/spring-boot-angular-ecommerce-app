package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ApparelCategoryDTO {

    @JsonProperty("apparel_category")
    private String category;

}
