package com.ecommerce.springbootecommerce.entity;

import lombok.Getter;
import lombok.Setter;
import org.apache.tomcat.jni.Address;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name="order_details")
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    @Column(name = "order_tracking_number")
    private String orderTrackingNumber;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    private Date created_at;

    private Date modified_at;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderDetails")
    private Set<OrderItem> orderItems = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn( name = "shipping_address_id")
    private Address shippingAddress;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn( name = "billing_address_id")
    private Address billingAddress;

    public void AddOrderItem(OrderItem orderItem) {
        if(orderItem != null){
            if(orderItems == null) {
                orderItems = new HashSet<>();
            }
            this.orderItems.add(orderItem);
            orderItem.setOrderDetails(this);
        }
    }


}
