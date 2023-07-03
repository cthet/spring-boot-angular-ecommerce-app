package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.BrandCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandCategoryRepository extends JpaRepository<BrandCategory, Integer> {

    @Query("SELECT DISTINCT b FROM BrandCategory b" +
            " JOIN b.products p" +
            " JOIN b.genderCategories g" +
            " WHERE g.id = :genderId" +
            " AND p.genderCategory.id = :genderId" +
            " GROUP BY b" +
            " HAVING COUNT(p) > 0")
    List<BrandCategory> findByGenderCategoryIdAndProductsIsNotNull(@Param("genderId") int genderId);

    @Query("SELECT DISTINCT b FROM BrandCategory b" +
            " JOIN b.products p" +
            " JOIN b.apparelCategories a" +
            " JOIN b.genderCategories g" +
            " WHERE a.id = :apparelCategoryId" +
            " AND g.id = :genderId" +
            " AND p.genderCategory.id = :genderId" +
            " AND p.apparelCategory.id = :apparelCategoryId" +
            " GROUP BY b" +
            " HAVING COUNT(p) > 0")
    List<BrandCategory> findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(@Param("genderId") int genderId, @Param("apparelCategoryId") int apparelCategoryId);
}
