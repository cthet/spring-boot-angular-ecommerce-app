package com.ecommerce.springbootecommerce.repository;


import com.ecommerce.springbootecommerce.domain.BrandCategoryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BrandCategoryImageRepository extends JpaRepository<BrandCategoryImage, Integer> {

    Optional<BrandCategoryImage> findByBrandCategoryIdAndGenderCategoryId(int brandId, int gender);
}
