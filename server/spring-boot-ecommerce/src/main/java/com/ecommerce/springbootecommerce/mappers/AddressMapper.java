package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;


@Mapper(componentModel = "spring", uses = {CountryMapper.class})
public interface AddressMapper {

    @Mapping(source = "country", target = "countryDto")
    @Mapping(source = "civility", target = "civilityDto")
    AddressDto addressToAddressDto(Address address);

    @Mapping(ignore = true, target = "country")
    @Mapping(ignore = true, target = "civility")
    Address addressDtoToAddress(AddressDto addressDto);

    @Mapping(source = "countryDto", target = "country")
    @Mapping(source = "civilityDto", target = "civility")
    void updateAddressFromDto(AddressDto addressDto, @MappingTarget Address address);

    List<AddressDto> addressesToAddressesDto(List<Address> addresses);

}
