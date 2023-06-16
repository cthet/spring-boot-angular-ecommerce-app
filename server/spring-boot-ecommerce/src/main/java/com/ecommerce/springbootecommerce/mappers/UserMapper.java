package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {


    @Mapping(target = "password", ignore = true)
    @Mapping(ignore = true, target = "civility")
    @Mapping(ignore = true, target = "id")
    @Mapping(ignore = true, target = "role")
    @Mapping(ignore = true, target = "cart")
    @Mapping(ignore = true, target = "orders")
    @Mapping(ignore = true, target = "addresses")
    User signupRequestToUser(SignupRequest signup);

    @Mapping(source = "civility", target = "civilityDto")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    InfoDto userToInfoDto(User user);

    @Mapping(source = "civilityDto", target = "civility")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(ignore = true, target = "id")
    @Mapping(ignore = true, target = "role")
    @Mapping(ignore = true, target = "cart")
    @Mapping(ignore = true, target = "orders")
    @Mapping(ignore = true, target = "addresses")
    @Mapping(ignore = true, target = "email")
    @Mapping(ignore = true, target = "password")
    @Mapping(ignore = true, target = "civility.users")
    User infoDtoToUser(InfoDto infoDto);


}
