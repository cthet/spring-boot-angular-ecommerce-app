package com.ecommerce.springbootecommerce.dto.category;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApparelCategoryDto {

    @JsonProperty("id")
    @NotEmpty(message = "id cannot be empty")
    private int id;

    @JsonProperty("apparel_category")
    @NotBlank(message = "category cannot be blank")
    private String name;

}
