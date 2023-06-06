package com.ecommerce.springbootecommerce.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "gender_category")
public class GenderCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name = "gender_category_type")
    private String name;

    @OneToMany(mappedBy = "genderCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    @OneToMany(mappedBy = "genderCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BrandCategoryImage> brandCategoryImages = new HashSet<>();

    @ManyToMany(mappedBy = "genderCategories")
    private Set<ApparelCategory> apparelCategories = new HashSet<>();

    @ManyToMany(mappedBy = "genderCategories")
    private Set<BrandCategory> brandCategories = new HashSet<>();


}
