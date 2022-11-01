//package com.ecommerce.springbootecommerce.domain;
//
//import lombok.Getter;
//import lombok.Setter;
//
//import javax.persistence.*;
//
//@Getter
//@Setter
//@Entity
//@Table(name = "product_images")
//public class ProductImage {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    private int id;
//
//    @Column(name="image_url")
//    private String image_url;
//
//    @Column(name="image_url")
//    private String image_url;
//
//
//    @JoinColumn(name = "product_id")
//    @ManyToOne(fetch = FetchType.LAZY)
//    private Product product;
//}
