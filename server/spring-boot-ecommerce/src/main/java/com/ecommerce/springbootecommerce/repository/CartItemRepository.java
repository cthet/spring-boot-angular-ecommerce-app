package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    void deleteById(Long Id);
}
