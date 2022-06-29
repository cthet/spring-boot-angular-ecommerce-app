package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.repositories.GenderCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelCategoryService;
import com.ecommerce.springbootecommerce.web.dto.ApparelCategoriesDTO;
import com.ecommerce.springbootecommerce.web.dto.ApparelCategoryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApparelCategoryServiceImpl implements ApparelCategoryService {
    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;
    @Autowired
    GenderCategoryRepository genderCategoryRepository;
    @Override
    public ApparelCategoriesDTO getApparelCategoriesByGender(int gender) {

        List<ApparelCategory> apparelCategories = apparelCategoryRepository.findByGenderCategoryId(gender);

        ApparelCategoriesDTO apparelCategoriesDTO = new ApparelCategoriesDTO();
        apparelCategoriesDTO.setGender(genderCategoryRepository.findById(gender).orElseThrow(() -> new ApiRequestException("Apparels categories not found for this gender", HttpStatus.NOT_FOUND)).getType());

        List<ApparelCategoryDTO> apparelCategoryDTOS = new ArrayList<ApparelCategoryDTO>();

        for(ApparelCategory apparelCategory: apparelCategories){
            ApparelCategoryDTO apparelCategoryDTO = new ApparelCategoryDTO();
            apparelCategoryDTO.setId(apparelCategory.getId());
            apparelCategoryDTO.setCategory(apparelCategory.getType());
            apparelCategoryDTOS.add(apparelCategoryDTO);
        }

        apparelCategoriesDTO.setApparelCategories(apparelCategoryDTOS);

        return apparelCategoriesDTO;
    }

}
