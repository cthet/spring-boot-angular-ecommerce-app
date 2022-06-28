package com.ecommerce.springbootecommerce.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
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

    @ManyToMany(mappedBy = "genderCategories")
    private Set<ApparelCategory> apparelCategories = new HashSet<>();

    @OneToMany(mappedBy = "genderCategory")
    private List<Product> products;

}
