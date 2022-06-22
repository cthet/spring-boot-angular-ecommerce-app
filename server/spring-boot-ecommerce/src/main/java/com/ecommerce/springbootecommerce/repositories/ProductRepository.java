package com.ecommerce.springbootecommerce.repositories;

import com.ecommerce.springbootecommerce.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

    Page<Product> findByGenderCategoryIdAndApparelCategoryIdAndPriceRangeCategoryId(int gender, int Apparel, int priceRange, Pageable pageable);

}
