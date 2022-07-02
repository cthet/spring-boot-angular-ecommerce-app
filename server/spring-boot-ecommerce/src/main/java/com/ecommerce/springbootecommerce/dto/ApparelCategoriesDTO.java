package com.ecommerce.springbootecommerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;


@Data
public class ApparelCategoriesDTO {

    @JsonProperty("gender")
    String gender;

    @JsonProperty("apparel_categories")
    List<ApparelCategoryDTO> apparelCategories;

}
