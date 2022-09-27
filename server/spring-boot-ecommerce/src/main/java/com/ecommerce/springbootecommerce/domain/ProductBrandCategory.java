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
@Table(name = "product_brand_category")
public class ProductBrandCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    @Column(name = "product_brand_category_type")
    private String type;

    @OneToMany(mappedBy = "productBrandCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    public void add(Product product){
        if(product != null) {
            if(products == null) {
                products = new HashSet<>();
            }

            products.add(product);
            product.setProductBrandCategory(this);
        }
    }
}
