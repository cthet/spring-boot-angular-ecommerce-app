package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {

    private final UserService userService;
    private final AddressRepository addressRepository;
    private final CountryRepository countryRepository;
    private final CivilityRepository civilityRepository;
    private final AddressMapper addressMapper;

    @Override
    public AddressDto fetchAddressDTO(Long id) {
        Address address = findAddress(id);
        AddressDto addressDto = addressMapper.addressToAddressDto(address);

        return addressDto;
    }

    @Override
    public AddressDto saveAddress(AddressDto addressDTO) {

        checkAddressExistence(addressDTO.getId());

        Address savedAddress  = mapAndSave(addressDTO);

        return addressMapper.addressToAddressDto(savedAddress );

    }

    @Override
    public AddressDto updateAddress(Long id, AddressDto addressDTO) {

        Address address = findAddress(id);

        checkUserAddress(address);

        addressMapper.updateAddressFromDto(addressDTO, address);

        Address savedAddress = addressRepository.save(address);

        return addressMapper.addressToAddressDto(savedAddress);

    }

    @Override
    public AddressResponse getUserAddress() {
        User user = userService.getUser();
        List<Address> addresses = addressRepository.findByUserId(user.getId());

        if (addresses.isEmpty()) {
            return new AddressResponse(new ArrayList<>());
        }

        List<AddressDto> addressDtos = addressMapper.addressesToAddressesDto(addresses);

        return new AddressResponse(addressDtos);

    }

    @Override
    public void deleteAddress(Long id) {
        Address address = findAddress(id);

        this.checkUserAddress(address);

        addressRepository.deleteById(id);

    }

    private void checkUserAddress(Address address){
        User user = userService.getUser();
        if(user != address.getUser()){
            throw new ApiRequestException("Check User Address failed", HttpStatus.FORBIDDEN);
        }
    }

    private Address findAddress(Long id) {
        return addressRepository.findById(id)
                .orElseThrow(() -> new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND));
    }

    private void checkAddressExistence(Long id) {
        addressRepository.findById(id).ifPresent(s -> {
            throw new ApiRequestException("Address already exists !", HttpStatus.CONFLICT);
        });
    }

    private Civility findCivility(int id) {
        return civilityRepository.findCivilityById(id)
                .orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
    }

    private Country findCountry(int id) {
        return countryRepository.findById(id)
                .orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));
    }

    private Address mapAndSave(AddressDto addressDto) {
        Address address = addressMapper.addressDtoToAddress(addressDto);
        address.setCivility(findCivility(addressDto.getCivilityDto().getId()));
        address.setCountry(findCountry(addressDto.getCountryDto().getId()));
        address.setUser(userService.getUser());

        return addressRepository.save(address);
    }
}
