package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApparelCategoryMapper {

    List<ApparelCategoryDto> apparelCategoriesToApparelCategoriesDto(List<ApparelCategory> apparelCategories);


}
