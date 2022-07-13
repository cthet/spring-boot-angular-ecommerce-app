package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.PriceRangeCategory;
import com.ecommerce.springbootecommerce.dto.category.PriceRangeCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.category.PriceRangeCategoryDTO;
import com.ecommerce.springbootecommerce.repository.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class PriceRangeCategoryServiceImpl implements PriceRangeCategoryService {

    @Autowired
    PriceRangeCategoryRepository priceRangeCategoryRepository;

    @Override
    public PriceRangeCategoriesDTO getAllPriceRangeCategories() {

        List<PriceRangeCategory> priceRangeCategories = priceRangeCategoryRepository.findAll();

        if(priceRangeCategories.isEmpty()) {
            throw new ApiRequestException("Price range categories not found", HttpStatus.NOT_FOUND);
        }

        Set<PriceRangeCategoryDTO> priceRangeCategoriesDTOS = new HashSet<>();

        for(PriceRangeCategory priceRangeCategory: priceRangeCategories) {
            PriceRangeCategoryDTO priceRangeCategoryDTO = new PriceRangeCategoryDTO();
            priceRangeCategoryDTO.setId(priceRangeCategory.getId());
            priceRangeCategoryDTO.setCategory(priceRangeCategory.getType());
            priceRangeCategoriesDTOS.add(priceRangeCategoryDTO);
        }

        PriceRangeCategoriesDTO priceRangeCategoriesDTO = new PriceRangeCategoriesDTO(priceRangeCategoriesDTOS);

        return priceRangeCategoriesDTO;
    }
}
