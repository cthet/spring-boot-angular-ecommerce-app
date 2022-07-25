package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    @JoinColumn(name = "country_id")
    private Country country;

    private int postCode;

    private String city;

    private String street;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    private Order order;
}
