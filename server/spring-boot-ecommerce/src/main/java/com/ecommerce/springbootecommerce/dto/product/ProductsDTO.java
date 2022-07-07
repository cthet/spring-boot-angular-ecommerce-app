package com.ecommerce.springbootecommerce.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class ProductsDTO {

    @JsonProperty("apparels")
    private List<ProductDTO> productDTOS;

}
