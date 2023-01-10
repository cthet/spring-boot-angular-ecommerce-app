package com.ecommerce.springbootecommerce.repository;


import com.ecommerce.springbootecommerce.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {


    Optional<Cart> findCartByUserId(long id);

}
