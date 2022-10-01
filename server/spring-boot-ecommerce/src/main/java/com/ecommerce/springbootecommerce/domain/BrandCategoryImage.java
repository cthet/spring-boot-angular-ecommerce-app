package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "brand_image")
public class BrandCategoryImage {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name="image_url")
    private String image_url;

    @JoinColumn(name = "brand_category_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private BrandCategory brandCategory;

    @JoinColumn(name = "gender_category_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private GenderCategory genderCategory;
}
