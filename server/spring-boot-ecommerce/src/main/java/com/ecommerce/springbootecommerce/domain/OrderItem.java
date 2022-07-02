package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Long quantity;

    private Long amount;

    @OneToOne
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
