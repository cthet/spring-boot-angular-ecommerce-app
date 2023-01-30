package com.ecommerce.springbootecommerce.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name="shipping_address")
@NoArgsConstructor
public class ShippingAddress {

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

    @OneToOne
    @PrimaryKeyJoinColumn
    private Order order;


}
