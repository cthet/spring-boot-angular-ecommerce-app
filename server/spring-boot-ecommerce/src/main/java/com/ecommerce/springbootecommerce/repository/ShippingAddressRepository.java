package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.ShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingAddressRepository extends JpaRepository<ShippingAddress, Long> {
}
