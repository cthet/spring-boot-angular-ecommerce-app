package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.address.AddressDTO;

import java.util.List;

public interface AddressService {

    AddressDTO createAddress(AddressDTO addressDTO);
    AddressDTO updateAddress(AddressDTO addressDTO);

    AddressDTO fetchAddressDTO(Long id);
    List<AddressDTO> getUserAddress();

    Long deleteAddress(Long id);

}
