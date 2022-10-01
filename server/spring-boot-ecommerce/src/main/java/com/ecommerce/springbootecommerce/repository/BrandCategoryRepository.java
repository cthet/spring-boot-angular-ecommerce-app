package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.BrandCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandCategoryRepository extends JpaRepository<BrandCategory, Integer> {

    @Query("SELECT DISTINCT b FROM BrandCategory b JOIN b.genderCategories g WHERE g.id = :genderId  ")
    List<BrandCategory> findByGenderCategoryId(@Param("genderId") int genderId);
}
