package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@Setter
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getUnitsInStocks() {
        return unitsInStocks;
    }

    public void setUnitsInStocks(int unitsInStocks) {
        this.unitsInStocks = unitsInStocks;
    }
}
