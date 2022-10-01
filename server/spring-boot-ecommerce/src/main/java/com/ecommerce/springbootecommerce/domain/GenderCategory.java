package com.ecommerce.springbootecommerce.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "gender_category")
public class GenderCategory {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    @Column(name = "gender_category_type")
    private String type;

    @OneToMany(mappedBy = "genderCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    @OneToMany(mappedBy = "brandCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<BrandCategoryImage> brandCategoryImages = new HashSet<>();

    @ManyToMany(mappedBy = "genderCategories")
    private Set<ApparelCategory> apparelCategories = new HashSet<>();

    @ManyToMany(mappedBy = "genderCategories")
    private Set<BrandCategory> brandCategories = new HashSet<>();

    public void add(Product product){
        if(product != null) {
            if(products == null) {
                products = new HashSet<>();
            }

            products.add(product);
            product.setGenderCategory(this);
        }
    }

    public void add(BrandCategoryImage brandCategoryImage){
        if(brandCategoryImage != null) {
            if(brandCategoryImages == null) {
                brandCategoryImages = new HashSet<>();
            }

            brandCategoryImages.add(brandCategoryImage);
            brandCategoryImage.setGenderCategory(this);
        }
    }

}
