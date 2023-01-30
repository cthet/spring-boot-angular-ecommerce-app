package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.ecommerce.springbootecommerce.dto.category.BrandCategoryDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandCategoryMapper {

    BrandCategoryDto brandCategoryToBrandCategoryDto(BrandCategory brandCategory);

}
