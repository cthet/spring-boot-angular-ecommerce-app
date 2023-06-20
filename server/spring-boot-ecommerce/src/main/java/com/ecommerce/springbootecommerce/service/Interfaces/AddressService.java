package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;

public interface AddressService {

    AddressDto saveAddress(AddressDto addressDTO);

    AddressDto updateAddress(Long id, AddressDto addressDTO);

    AddressDto fetchAddressDTO(Long id);

    AddressResponse getUserAddress();

    void deleteAddress(Long id);

}
