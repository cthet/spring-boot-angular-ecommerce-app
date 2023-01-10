package com.ecommerce.springbootecommerce.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ProductsResponse {

    @JsonProperty("products")
    @NotNull(message = "products cannot be null")
    private List<ProductDTO> productsDTO;

    @JsonProperty("current_page")
    @NotNull
    private int currentPage;

    @JsonProperty("size")
    @NotNull
    private int size;

    @JsonProperty("total_items")
    @NotNull
    private Long totalItems;

    @JsonProperty("total_pages")
    @NotNull
    private int totalPages;

}

