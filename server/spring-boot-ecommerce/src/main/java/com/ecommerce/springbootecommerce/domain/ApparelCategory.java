package com.ecommerce.springbootecommerce.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="apparel_category")
public class ApparelCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;


    private String apparelName;

    @OneToMany(fetch = FetchType.LAZY, orphanRemoval = true, mappedBy = "apparelCategory")
    private List<Product> product;
}
