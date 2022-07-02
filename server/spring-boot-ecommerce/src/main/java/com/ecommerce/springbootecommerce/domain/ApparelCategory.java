package com.ecommerce.springbootecommerce.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="apparel_category")
public class ApparelCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    @Column(name = "apparel_category_type")
    private String type;

    @OneToMany(mappedBy = "apparelCategory", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Product> products = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "apparel_gender", joinColumns = @JoinColumn(name = "apparel_category_id"), inverseJoinColumns = @JoinColumn(name = "gender_category_id"))
    private Set<GenderCategory> genderCategories = new HashSet<>();

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

