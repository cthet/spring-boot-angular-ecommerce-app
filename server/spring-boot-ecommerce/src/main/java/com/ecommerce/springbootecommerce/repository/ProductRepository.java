package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    Page<Product> findByGenderCategoryId(int gender, Pageable pageable);

    Page<Product> findByGenderCategoryIdAndBrandCategoryId(int gender, int brand, Pageable pageable);
    Page<Product> findByGenderCategoryIdAndApparelCategoryIdIn(int gender, List<Integer> category, Pageable pageable);

    Page<Product> findByGenderCategoryIdAndApparelCategoryIdInAndBrandCategoryId(int gender, List<Integer> category, int brand, Pageable pageable);

}
