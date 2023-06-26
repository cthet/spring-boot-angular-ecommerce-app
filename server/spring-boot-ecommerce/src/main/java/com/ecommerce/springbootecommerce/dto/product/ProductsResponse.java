package com.ecommerce.springbootecommerce.dto.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductsResponse {

    @JsonProperty("products")
    @NotNull(message = "products cannot be null")
    private List<ProductDto> productsDTO;

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

