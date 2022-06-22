package com.ecommerce.springbootecommerce.web.dto;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.domain.GenderCategory;
import com.ecommerce.springbootecommerce.domain.PriceRangeCategory;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
public class ApparelDTO implements Serializable {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("id")
    private String apparelName;

    @JsonProperty("unit_price")
    private BigDecimal unitPrice;

    @JsonProperty("image_url")
    private String imageUrl;

    @JsonProperty("units_in_stocks")
    private int unitsInStocks;

    @JsonProperty("gender_category")
    private GenderCategory genderCategory;

    @JsonProperty("apparel_category")
    private ApparelCategory apparelCategory;

    @JsonProperty("priceRange_category")
    private PriceRangeCategory priceRangeCategory;

    @Builder
    public ApparelDTO(Long id, String apparelName, BigDecimal unitPrice, String imageUrl, int unitsInStocks, GenderCategory genderCategory, ApparelCategory apparelCategory, PriceRangeCategory priceRangeCategory){
        this.id = id;
        this.apparelName = apparelName;
        this.imageUrl = imageUrl;
        this.unitsInStocks = unitsInStocks;
        this.genderCategory = genderCategory;
        this.apparelCategory = apparelCategory;
        this.priceRangeCategory = priceRangeCategory;
    };
}
