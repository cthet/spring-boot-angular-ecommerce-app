package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApparelCategoryRepository extends JpaRepository<ApparelCategory, Integer> {

    List<ApparelCategory> findAll();

    @Query("SELECT DISTINCT a FROM ApparelCategory a" +
            " JOIN a.products p"+
            " JOIN a.genderCategories g" +
            " WHERE p.genderCategory.id = :genderId" +
            " AND g.id =:genderId"+
            " GROUP BY a" +
            " HAVING COUNT(p) > 0")
    List<ApparelCategory> findByGenderCategoryIdAndProductsIsNotNull(@Param("genderId") int genderId);

    @Query("SELECT DISTINCT a FROM ApparelCategory a" +
            " JOIN a.products p"+
            " JOIN a.brandCategories b" +
            " JOIN a.genderCategories g" +
            " WHERE b.id = :brandId" +
            " AND g.id = :genderId"+
            " AND p.genderCategory.id = :genderId" +
            " AND p.brandCategory.id = :brandId" +
            " GROUP BY a" +
            " HAVING COUNT(p) > 0")
    List<ApparelCategory> findByBrandCategoryIdAndGenderCategoryIdAndProductsIsNotNull(@Param("brandId")int brandId, @Param("genderId") int genderId);
}