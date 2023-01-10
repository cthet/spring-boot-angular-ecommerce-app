package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Civility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CivilityRepository extends JpaRepository<Civility, Integer> {

    Optional<Civility> findCivilityById(int Id);
}
