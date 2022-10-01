package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class BrandCategoryDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("brand_category")
    private String brand;

    @JsonProperty("image_url")
    private String imageUrl;

    @JsonProperty("description")
    private String description;

}
