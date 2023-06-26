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
public class ApparelCategoryDto {

    @JsonProperty("id")
    @NotEmpty(message = "id cannot be empty")
    private int id;

    @JsonProperty("apparel_category")
    @NotBlank(message = "category cannot be blank")
    private String name;

}
