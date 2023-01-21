package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
public class BrandCategoryDto {

    @JsonProperty("id")
    @NotEmpty(message = "id cannot be empty")
    private int id;

    @JsonProperty("brand_category")
    @NotBlank(message = "brand cannot be blank")
    private String brand;

    @JsonProperty("image_url")
    @NotBlank(message = "image_url cannot be blank")
    private String imageUrl;

    @JsonProperty("description")
    @NotBlank(message = "description cannot be blank")
    private String description;

}
