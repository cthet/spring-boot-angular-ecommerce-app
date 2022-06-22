package com.ecommerce.springbootecommerce.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @NotNull
    @Column(name = "gender_category_type")
    private String type;

    @OneToMany(mappedBy = "genderCategory")
    @JsonIgnore
    private List<Product> products;

}
