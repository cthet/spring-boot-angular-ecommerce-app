package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.auth.SignupRequest;
import com.ecommerce.springbootecommerce.dto.auth.UserDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.enums.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {CivilityMapper.class})
public interface UserMapper {


    @Mapping(target = "password", ignore = true)
    @Mapping(ignore = true, target = "civility")
    User signupRequestToUser(SignupRequest signup);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "role", target = "role", qualifiedByName = "roleToString")
    UserDto userToUserDto(User user);

    @Mapping(source = "id", target = "id")
    @Mapping(target = "role", qualifiedByName = "stringToRole")
    User userDtoToUser(UserDto userDto);

    @Mapping(source = "civility", target = "civilityDto")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    InfoDto userToInfoDto(User user);

    @Mapping(source = "civilityDto", target = "civility")
    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "lastName", target = "lastName")
    User infoDtoToUser(InfoDto infoDto);

    @Named("roleToString")
    default String roleToString(Set<Role> role) {
        return role.stream().map(Enum::name).collect(Collectors.joining(","));
    }

    @Named("stringToRole")
    default Set<Role> stringToRole(String roles) {
        return Arrays.stream(roles.split(","))
                .map(Role::valueOf)
                .collect(Collectors.toSet());
    }

    default Integer map(Civility civility){
        return civility.getId();
    };

    default  Civility map(Integer value){
        return new Civility(value);
    };
}
