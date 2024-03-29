package com.ecommerce.springbootecommerce.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    @JsonProperty("id")
    @NotEmpty(message = "id cannot be empty")
    private Long id;

    @JsonProperty("product_name")
    @NotBlank(message = "product_name cannot be blank")
    private String productName;

    @JsonProperty("unit_price")
    @NotEmpty(message = "unit_price cannot be empty")
    private BigDecimal unitPrice;

    @JsonProperty("image_url")
    @NotBlank(message = "image_url cannot be blank")
    private String imageUrl;

    @JsonProperty("active")
    @NotEmpty(message = "active cannot be empty")
    private Boolean active;

    @JsonProperty("units_in_stock")
    @NotEmpty(message = "units_in_stock cannot be empty")
    private int unitsInStocks;

    @JsonProperty("gender_category")
    @NotBlank(message = "gender_category cannot be blank")
    private String gender_category;

    @JsonProperty("product_category")
    @NotBlank(message = "product_category cannot be blank")
    private String product_category;

    @JsonProperty("brand_category")
    @NotBlank(message = "brand_category cannot be blank")
    private String brand_category;

}
