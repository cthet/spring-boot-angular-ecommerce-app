package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    Set<Address> findByUserId(Long id);
}
