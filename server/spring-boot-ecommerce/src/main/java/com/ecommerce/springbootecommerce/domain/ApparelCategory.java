package com.ecommerce.springbootecommerce.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="apparel_category")
public class ApparelCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name = "apparel_category_type")
    private String name;

    @OneToMany(mappedBy = "apparelCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "apparel_category_gender", joinColumns = @JoinColumn(name = "apparel_category_id"), inverseJoinColumns = @JoinColumn(name = "gender_category_id"))
    private Set<GenderCategory> genderCategories = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "apparel_category_brand", joinColumns = @JoinColumn(name = "apparel_category_id"), inverseJoinColumns = @JoinColumn(name = "brand_category_id"))
    private Set<BrandCategory> brandCategories = new HashSet<>();

    public void addProduct(Product product) {
        if( product != null) {

            if(products == null) {
                products = new HashSet<>();
            }

            products.add(product);
            product.setApparelCategory(this);
        }
    }

}

