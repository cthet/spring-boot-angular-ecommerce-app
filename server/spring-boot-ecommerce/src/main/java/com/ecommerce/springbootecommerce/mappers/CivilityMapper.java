package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CivilityMapper {


    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    CivilityDto civilityToCivilityDto(Civility civility);

}
