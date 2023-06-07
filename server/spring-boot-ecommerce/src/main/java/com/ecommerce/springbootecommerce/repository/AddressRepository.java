package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    Optional<Address> findById(Long id);

    List<Address> findByUserId(long userId);
}
