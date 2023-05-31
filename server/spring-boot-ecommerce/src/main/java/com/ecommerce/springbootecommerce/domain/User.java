package com.ecommerce.springbootecommerce.domain;

import com.ecommerce.springbootecommerce.enums.Role;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.*;


@Getter
@Setter
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "civility_id", referencedColumnName = "id")
    private Civility civility;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(unique = true)
    private String email;

    private String password;

    @ElementCollection(targetClass = Role.class)
    @CollectionTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    private Set<Role> role = new HashSet<>();

    @OneToOne(mappedBy = "user")
    private Cart cart;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addresses = new ArrayList<>();

    public List<Order> getOrders() {
        return Collections.unmodifiableList(orders);
    }

    public List<Address> getAddresses() {
        return Collections.unmodifiableList(addresses);
    }

    public void addOrder(Order order){
        if(order != null) {
            this.orders.add(order);
            order.setUser(this);
        }
    }

    public void addAddress(Address address){
        if(address != null) {
            this.addresses.add(address);
            address.setUser(this);
        }
    }

}
