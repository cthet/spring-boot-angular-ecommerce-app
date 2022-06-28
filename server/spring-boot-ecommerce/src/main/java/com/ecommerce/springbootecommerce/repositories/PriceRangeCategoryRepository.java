package com.ecommerce.springbootecommerce.repositories;

import com.ecommerce.springbootecommerce.domain.PriceRangeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRangeCategoryRepository extends JpaRepository<PriceRangeCategory, Integer> {
    List<PriceRangeCategory> findAll();

}
