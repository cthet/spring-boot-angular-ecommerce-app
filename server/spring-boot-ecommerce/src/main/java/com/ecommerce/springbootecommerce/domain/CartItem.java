package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "cart_item")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private int quantity;

    private BigDecimal amount;

    @OneToOne
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", referencedColumnName = "id")
    private Cart cart;

}
