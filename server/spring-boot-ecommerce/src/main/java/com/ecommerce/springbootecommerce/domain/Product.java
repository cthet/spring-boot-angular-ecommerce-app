package com.ecommerce.springbootecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table (name ="product")
public class Product {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name = "units_in_stock")
    private int unitsInStocks;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "gender_category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private GenderCategory genderCategory;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "apparel_category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private ApparelCategory apparelCategory;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "price_range_category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private PriceRangeCategory priceRangeCategory;

    public Product() {
    }

    public Product(Long id, String productName, BigDecimal unitPrice, String imageUrl, int unitsInStocks, GenderCategory genderCategory, ApparelCategory apparelCategory, PriceRangeCategory priceRangeCategory) {
        this.id = id;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.unitsInStocks = unitsInStocks;
        this.genderCategory = genderCategory;
        this.apparelCategory = apparelCategory;
        this.priceRangeCategory = priceRangeCategory;
    }

    public Product(String productName, BigDecimal unitPrice, String imageUrl, int unitsInStocks) {
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.unitsInStocks = unitsInStocks;
    }

    public Product(Long id, String productName, BigDecimal unitPrice, String imageUrl, int unitsInStocks) {
        this.id = id;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.unitsInStocks = unitsInStocks;
    }

    @Override
    public String toString() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

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

    public GenderCategory getGenderCategory() {
        return genderCategory;
    }

    public void setGenderCategory(GenderCategory genderCategory) {
        this.genderCategory = genderCategory;
    }

    public ApparelCategory getApparelCategory() {
        return apparelCategory;
    }

    public void setApparelCategory(ApparelCategory apparelCategory) {
        this.apparelCategory = apparelCategory;
    }

    public PriceRangeCategory getPriceRangeCategory() {
        return priceRangeCategory;
    }

    public void setPriceRangeCategory(PriceRangeCategory priceRangeCategory) {
        this.priceRangeCategory = priceRangeCategory;
    }
}
