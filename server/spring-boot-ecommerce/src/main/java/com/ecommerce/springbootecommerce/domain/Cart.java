package com.ecommerce.springbootecommerce.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


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
    List<CartItem> cartItems = new ArrayList<>();

    public List<CartItem> getCartItems() {
        return Collections.unmodifiableList(cartItems);
    }

    public void addCartItem(CartItem cartItem) {
        if(cartItem != null) {
            this.cartItems.add(cartItem);
            cartItem.setCart(this);
        }
    }

    public void clearCartItem(){
        this.cartItems.clear();
    }

    public void deleteCartItem(CartItem item){
        if(item != null){
            this.cartItems.remove(item);
        }
    }



}
