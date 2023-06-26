package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrandCategoriesResponse {

    @JsonProperty("gender")
    @NotBlank(message = "gender cannot be blank")
    private String gender;

    @JsonProperty("brand_categories")
    @NotNull(message = "brand_categories cannot be null")
    private List<BrandCategoryDto> brandCategories;

}