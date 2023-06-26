package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrandCategoryDto {

    @JsonProperty("id")
    @NotEmpty(message = "id cannot be empty")
    private int id;

    @JsonProperty("brand_category")
    @NotBlank(message = "brand cannot be blank")
    private String name;

    @JsonProperty("image_url")
    @NotBlank(message = "image_url cannot be blank")
    private String imageUrl;

    @JsonProperty("description")
    @NotBlank(message = "description cannot be blank")
    private String description;

}
