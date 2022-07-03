package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.PriceRangeCategory;
import com.ecommerce.springbootecommerce.repository.PriceRangeCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.PriceRangeCategoryService;
import com.ecommerce.springbootecommerce.dto.PriceRangeCategoriesDTO;
import com.ecommerce.springbootecommerce.dto.PriceRangeCategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

        List<PriceRangeCategoryDTO> priceRangeCategoriesDTOS = new ArrayList<PriceRangeCategoryDTO>();

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
