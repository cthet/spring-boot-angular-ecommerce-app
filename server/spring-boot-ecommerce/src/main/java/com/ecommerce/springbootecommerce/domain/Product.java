package com.ecommerce.springbootecommerce.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table (name ="apparel")
public class Apparel {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    @Column(name = "apparel_name")
    private String apparelName;

    @NotNull
    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @NotNull
    @Column(name="image_url")
    private String imageUrl;

    @Column(name = "units_in_stock")
    private int unitsInStocks;
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gender_category_id", nullable = false)
    private GenderCategory genderCategory;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apparel_category_id", nullable = false)
    private ApparelCategory apparelCategory;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "price_range_category_id", nullable = false)
    private PriceRangeCategory priceRangeCategory;


}
