package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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

    @OneToOne(mappedBy = "civility")
    private User user;

    public Civility(int id){
        setId(id);
    }
}
