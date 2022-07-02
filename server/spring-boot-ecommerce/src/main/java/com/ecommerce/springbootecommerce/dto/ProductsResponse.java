package com.ecommerce.springbootecommerce.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class ProductsResponse {

    @JsonProperty("products")
    private List<ProductDTO> productsDTO;

    @JsonProperty("current_page")
    private int currentPage;

    @JsonProperty("size")
    private int size;

    @JsonProperty("total_items")
    private Long totalItems;

    @JsonProperty("total_pages")
    private int totalPages;

}

