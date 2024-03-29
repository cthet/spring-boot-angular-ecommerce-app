package com.ecommerce.springbootecommerce.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "civility_id")
    private Civility civility;

    @Column(name="first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String street;

    @Column(name = "address_complement")
    private String addressComplement;

    private String city;

    @Column(name = "post_code")
    private int postCode;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    @Column(name = "phone_number")
    private String phoneNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "address", cascade = CascadeType.ALL)
    private Set<Order> orders = new HashSet<>();

}
