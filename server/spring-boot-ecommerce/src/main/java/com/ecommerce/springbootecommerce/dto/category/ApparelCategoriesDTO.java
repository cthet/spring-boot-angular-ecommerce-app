package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;


@Data
public class ApparelCategoriesDTO {

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("apparel_categories")
    private List<ApparelCategoryDTO> apparelCategories;

}
