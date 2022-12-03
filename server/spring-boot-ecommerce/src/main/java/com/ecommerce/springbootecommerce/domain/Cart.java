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



    @Column(name = "total_quantity")
    private int totalQuantity;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart", orphanRemoval = true)
    private Set<CartItem> cartItems = new HashSet<>();
    public void addCartItem(CartItem item) {
        if(item != null) {
            if (cartItems == null) {
                cartItems = new HashSet<>();
            }

            cartItems.add(item);
            item.setCart(this);
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
