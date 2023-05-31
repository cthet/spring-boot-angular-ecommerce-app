package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "civility")
@NoArgsConstructor
public class Civility {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String name;

    @OneToMany(mappedBy = "civility", cascade = CascadeType.ALL)
    private Set<User> users = new HashSet<>();

    public Civility(int id){
        setId(id);
    }
}
