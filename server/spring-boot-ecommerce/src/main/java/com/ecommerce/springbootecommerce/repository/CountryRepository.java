package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {

    List<Country> findAll();
}
