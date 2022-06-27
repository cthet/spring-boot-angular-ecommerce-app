package com.ecommerce.springbootecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.springbootecommerce.domain.PriceRangeCategory
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRangeCategoryRepository extends JpaRepository<PriceRangeCategory, Long> {
}
