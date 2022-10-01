package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class BrandCategoriesDTO {

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("brand_categories")
    private List<BrandCategoryDTO> brandCategories;

}