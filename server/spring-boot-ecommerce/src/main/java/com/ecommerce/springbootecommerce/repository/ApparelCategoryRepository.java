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
    @Query("SELECT DISTINCT a FROM ApparelCategory a JOIN a.genderCategories g WHERE g.id =:genderId")
    List<ApparelCategory> findByGenderCategoryId(@Param("genderId") int genderId);

    @Query("SELECT DISTINCT a FROM ApparelCategory a" +
            " JOIN a.brandCategories b" +
            " JOIN a.genderCategories g" +
            " WHERE b.id = :brandId AND g.id = :genderId")
    List<ApparelCategory> findByBrandCategoryIdAndGenderCategoryId(@Param("brandId")int brandId, @Param("genderId") int genderId);
}