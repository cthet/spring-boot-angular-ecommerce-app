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
    private Civility civility;

    @Column(name="first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String street;

    private String addressComplement;

    private String city;

    private int postCode;

    @OneToOne
    private Country country;

    private String phoneNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
