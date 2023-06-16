package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApparelCategoriesResponse {

    @JsonProperty("gender")
    @NotBlank(message = "gender cannot be blank")
    private String gender;

    @JsonProperty("apparel_categories")
    @NotNull(message = "apparel_categories cannot be null")
    private List<ApparelCategoryDto> apparelCategories;

}
