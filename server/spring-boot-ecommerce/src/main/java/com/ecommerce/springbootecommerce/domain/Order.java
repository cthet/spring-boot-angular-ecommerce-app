package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String orderTrackingNumber;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name="date_created")
    @CreationTimestamp
    private Date Datecreated;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderItem> orderItems = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shipping_address_id", referencedColumnName = "id")
    private ShippingAddress shippingAddress;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void addOrderItem(OrderItem orderItem) {
        if(orderItem != null) {
            if (orderItems == null) {
                orderItems = new HashSet<>();
            }

            orderItems.add(orderItem);
            orderItem.setOrder(this);
        }
    }

}
