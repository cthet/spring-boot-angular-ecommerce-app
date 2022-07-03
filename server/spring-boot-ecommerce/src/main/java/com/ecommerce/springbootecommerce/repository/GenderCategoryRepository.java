package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.GenderCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenderCategoryRepository extends JpaRepository<GenderCategory, Integer> {
    List<GenderCategory> findAll();

}
