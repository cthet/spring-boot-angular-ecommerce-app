package com.ecommerce.springbootecommerce.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;


@Data
public class ProductDTO {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("product_name")
    private String productName;

    @JsonProperty("unit_price")
    private BigDecimal unitPrice;

    @JsonProperty("image_url")
    private String imageUrl;

    @JsonProperty("units_in_stock")
    private int unitsInStocks;

    @JsonProperty("active")
    private Boolean active;

    @JsonProperty("gender_category")
    private String gender_category;

    @JsonProperty("product_category")
    private String product_category;

    @JsonProperty("brand_category")
    private String brand_category;

}
