package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;

import java.util.List;

public interface AddressService {

    AddressDto createAddress(AddressDto addressDTO);
    AddressDto updateAddress(AddressDto addressDTO);

    AddressDto fetchAddressDTO(Long id);
    List<AddressDto> getUserAddress();

    Long deleteAddress(Long id);

    Civility fetchCivility(int id);

}
