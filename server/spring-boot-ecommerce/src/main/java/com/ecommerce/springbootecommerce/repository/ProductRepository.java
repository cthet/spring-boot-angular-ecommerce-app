package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    Page<Product> findByGenderCategoryId(int gender, Pageable pageable);

    Page<Product> findByGenderCategoryIdAndBrandCategoryId(int gender, int brand, Pageable pageable);
    Page<Product> findByGenderCategoryIdAndApparelCategoryIdIn(int gender, List<Integer> category, Pageable pageable);

    Page<Product> findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryId(int gender, List<Integer> category, int brand, Pageable pageable);

    @Query("SELECT p FROM Product p" +
            " WHERE p.newProduct = :newProduct AND p.genderCategory.id = :genderId" +
    " ORDER BY p.id")
    Page<Product> findNewProductByGenderCategoryId(@Param("genderId") int genderId, @Param("newProduct") boolean newProduct, Pageable pageable);
}
