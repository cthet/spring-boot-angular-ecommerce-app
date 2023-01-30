package com.ecommerce.springbootecommerce.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart", orphanRemoval = true)
    Set<CartItem> cartItems = new HashSet<>();
    public void addCartItem(CartItem cartItem) {
        if(cartItem != null) {
            if (cartItems == null) {
                cartItems = new HashSet<>();
            }

            cartItems.add(cartItem);
            cartItem.setCart(this);
        }
    }

    public void deleteCartItem(CartItem item){
        if(item != null){
            cartItems.remove(item);
        }
    }

    public Set<CartItem> getCartItems() {
        return Collections.unmodifiableSet(cartItems);
    }

}
