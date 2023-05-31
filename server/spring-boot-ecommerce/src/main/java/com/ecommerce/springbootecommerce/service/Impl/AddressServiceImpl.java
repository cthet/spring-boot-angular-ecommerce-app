package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {

    @Autowired
    UserService userService;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    CountryRepository countryRepository;

    @Autowired
    CivilityRepository civilityRepository;

    private final AddressMapper addressMapper;


    @Override
    public AddressDto fetchAddressDTO(Long id) {
        Address address = addressRepository.findById(id).orElseThrow(() -> new ApiRequestException("Address not found!", HttpStatus.NOT_FOUND));

        AddressDto addressDto = addressMapper.addressToAddressDto(address);

        return addressDto;
    }

    public AddressDto createAddress(AddressDto addressDTO) {

        Optional<Address> optAddress = addressRepository.findById(addressDTO.getId());

        if(optAddress.isPresent()){
            throw new ApiRequestException("Address already exists !", HttpStatus.BAD_REQUEST);
        }

        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivilityDto().getId())
                .orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDto().getId())
                .orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = addressMapper.addressDtoToAddress(addressDTO);
        address.setCivility(civility);
        address.setCountry(country);
        address.setUser(userService.getUser());
        //save shipping address
        return addressMapper.addressToAddressDto(addressRepository.save(address));

    }

    @Override
    public AddressDto updateAddress(AddressDto addressDTO) {

        addressRepository.findById(addressDTO.getId())
                .orElseThrow(() -> new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND));

        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivilityDto().getId())
                .orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));

        Country country = countryRepository.findById(addressDTO.getCountryDto().getId())
                .orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = addressMapper.addressDtoToAddress(addressDTO);
        address.setCivility(civility);
        address.setCountry(country);
        address.setUser(userService.getUser());

        //save shipping address
        return addressMapper.addressToAddressDto(addressRepository.save(address));

    }

    @Override
    public List<AddressDto> getUserAddress() {
        User user = userService.getUser();
        List<Address> addresses = addressRepository.findByUserId(user.getId());

        if (addresses.isEmpty()) {
            return List.of();
        }

        return addressMapper.addressesToAddressesDto(addresses);
    }

    @Override
    public Long deleteAddress(Long id) {
        addressRepository.deleteById(id);
        return id;
    }
}
