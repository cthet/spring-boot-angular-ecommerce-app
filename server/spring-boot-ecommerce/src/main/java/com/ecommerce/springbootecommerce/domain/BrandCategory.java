package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "brand_category")
public class BrandCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name = "brand_category_type")
    private String name;

    @Column(columnDefinition = "TEXT", length = 2048)
    private String description;

    @OneToMany(mappedBy = "brandCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    @OneToMany(mappedBy = "brandCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BrandCategoryImage> brandCategoryImages = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "brand_category_gender", joinColumns = @JoinColumn(name = "brand_category_id"), inverseJoinColumns = @JoinColumn(name = "gender_category_id"))
    private Set<GenderCategory> genderCategories = new HashSet<>();

    @ManyToMany(mappedBy = "brandCategories")
    private Set<ApparelCategory> apparelCategories = new HashSet<>();

    public void add(Product product){
        if(product != null) {
            if(products == null) {
                products = new HashSet<>();
            }

            products.add(product);
            product.setBrandCategory(this);
        }
    }
    public void add(BrandCategoryImage brandCategoryImage){
        if(brandCategoryImage != null) {
            if(brandCategoryImages == null) {
                brandCategoryImages = new HashSet<>();
            }

            brandCategoryImages.add(brandCategoryImage);
            brandCategoryImage.setBrandCategory(this);
        }
    }
}
