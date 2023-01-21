package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;


@Data
public class ApparelCategoriesDto {

    @JsonProperty("gender")
    @NotBlank(message = "gender cannot be blank")
    private String gender;

    @JsonProperty("apparel_categories")
    @NotNull(message = "apparel_categories cannot be null")
    private List<ApparelCategoryDto> apparelCategories;

}
