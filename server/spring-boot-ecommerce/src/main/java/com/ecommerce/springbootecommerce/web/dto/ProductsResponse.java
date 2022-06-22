package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductsResponse {

    @JsonProperty("products")
    private ProductsDTO productsDTO;

    @JsonProperty("current_page")
    private int currentPage;

    @JsonProperty("size")
    private int size;

    @JsonProperty("total_items")
    private Long totalItems;

    @JsonProperty("total_pages")
    private int totalPages;

    public ProductsResponse() {
    }

    public ProductsResponse(ProductsDTO productsDTO, int currentPage, int size, Long totalItems, int totalPages) {
        this.productsDTO = productsDTO;
        this.currentPage = currentPage;
        this.size = size;
        this.totalItems = totalItems;
        this.totalPages = totalPages;
    }



    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public Long getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(Long totalItems) {
        this.totalItems = totalItems;
    }

    public ProductsDTO getProductsDTO() {
        return productsDTO;
    }

    public void setProductsDTO(ProductsDTO productsDTO) {
        this.productsDTO = productsDTO;
    }


}

