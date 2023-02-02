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

    Page<Product> findByGenderCategoryIdAndBrandCategoryIdIn(int gender, List<Integer> brand, Pageable pageable);
    Page<Product> findByGenderCategoryIdAndApparelCategoryIdIn(int gender, List<Integer> category, Pageable pageable);

    Page<Product> findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryIdIn(int gender, List<Integer> category, List<Integer> brand, Pageable pageable);

    @Query("SELECT p FROM Product p" +
            " WHERE p.newProduct = :newProduct AND p.genderCategory.id = :genderId" +
    " ORDER BY p.id")
    Page<Product> findNewProductByGenderCategoryId(@Param("genderId") int genderId, @Param("newProduct") boolean newProduct, Pageable pageable);
}
