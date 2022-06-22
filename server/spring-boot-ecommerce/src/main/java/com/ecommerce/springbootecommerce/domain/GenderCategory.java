package com.ecommerce.springbootecommerce.entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "gender_category")
public class GenderCategory {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(name = "gender_category")
    @NotNull
    private String genderCategory;

    @OneToMany(fetch = FetchType.LAZY, orphanRemoval = true, mappedBy = "genderCategory")
    private List<Product> product;

}
