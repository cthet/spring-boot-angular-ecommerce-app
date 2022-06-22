package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class ProductsDTO {

    @JsonProperty("apparels")
    private List<ProductDTO> productDTOS;

    public List<ProductDTO> getProductDTOS() {
        return productDTOS;
    }

    public void setProductDTOS(List<ProductDTO> productDTOS) {
        this.productDTOS = productDTOS;
    }

}
