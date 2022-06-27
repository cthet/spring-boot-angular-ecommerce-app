package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.repositories.ApparelCategoryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.ApparelService;
import com.ecommerce.springbootecommerce.web.dto.ApparelsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApparelServiceImpl implements ApparelService {

    @Autowired
    ApparelCategoryRepository apparelCategoryRepository;

    @Override
    public ApparelsDTO getApparelsByGender(int gender) {

        List<ApparelCategory> apparelCategories = apparelCategoryRepository.findByGenderCategoryId(gender);



        return null;
    }


}
