package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.ShippingAddress;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring", uses = {CountryMapper.class, CivilityMapper.class})
public interface AddressMapper {

//    @Mapping(source = "country", target = "countryDTO")
//    @Mapping(source = "civility", target = "civility", expression = "java(civility.getId())")

    @Mapping(source = "country", target = "countryDto")
    @Mapping(source = "civility", target = "civilityDto")
    AddressDto addressToAddressDto(Address address);

//    @Mapping(target = "order", ignore = true)
//    @Mapping(target = "user", ignore = true)

//    @Mapping(source = "countryDTO", target = "country")
//    @Mapping(source = "civility", target = "civility")

//    @Mapping(expression = "java(countryDTO.getId()).orElse(null))", target = "country" )
//    @Mapping(expression = "java(CivilityService.getCivilityById(civility))", target = "civility")
    @Mapping(ignore = true, target = "country")
    @Mapping(ignore = true, target = "civility")
    Address addressDtoToAddress(AddressDto addressDto);

    @Mapping(ignore = true, target = "country")
    @Mapping(ignore = true, target = "civility")
    ShippingAddress addressDtoToShippingAddress(AddressDto addressDto);

    ShippingAddress addressToShippingAddress(Address address);

    List<AddressDto> addressesToAddressesDto(List<Address> addresses);


//    @Mapping(target = "int", source = "civility.id")
//    Integer civilityToInt(Civility civility);

//    @Named("civilityToInt")
//    default int civilityToInt(Civility civility) {
//        return civility.getId();
//    }

//    @Named("mapCivility")
//    default Civility mapCivility(int civility) {
//        return CivilityRepository.findCById(civility).orElse(null);
//    }
}
