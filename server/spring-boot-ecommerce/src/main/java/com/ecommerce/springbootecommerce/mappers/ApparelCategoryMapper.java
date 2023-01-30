package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApparelCategoryMapper {

    ApparelCategoryDto apparelCategoryToApparelCategoryDto(ApparelCategory apparelCategory);

    List<ApparelCategoryDto> apparelCategoriesToApparelCategoriesDto(List<ApparelCategory> apparelCategories);


}
