package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.address.CountryDTO;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CivilityRepository civilityRepository;

    @Override
    public AddressDTO fetchAddressDTO(Long id) {
        Address _address = addressRepository.findById(id).orElseThrow(() -> new ApiRequestException("Address not found!", HttpStatus.NOT_FOUND));
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setId(id);
        addressDTO.setCivility(_address.getCivility().getId());
        addressDTO.setFirstName(_address.getFirstName());
        addressDTO.setLastName(_address.getLastName());
        addressDTO.setAddressComplement(_address.getAddressComplement());
        addressDTO.setPostCode(_address.getPostCode());
        addressDTO.setCity(_address.getCity());
        addressDTO.setPhoneNumber(_address.getPhoneNumber());
        addressDTO.setStreet(_address.getStreet());

        CountryDTO countryDTO = new CountryDTO();
        countryDTO.setId(_address.getCountry().getId());
        countryDTO.setCountry(_address.getCountry().getName());
        addressDTO.setCountryDTO(countryDTO);

        return addressDTO;
    }

    public AddressDTO createAddress(AddressDTO addressDTO) {

        User user = userService.getUser();
        if(addressDTO.getId()!=0) {
            addressRepository.findById(addressDTO.getId()).orElseThrow(() -> new ApiRequestException("Address already exists", HttpStatus.BAD_REQUEST));
        }
        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivility()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDTO().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = new Address();

        address.setCivility(civility);
        address.setFirstName(addressDTO.getFirstName());
        address.setLastName(addressDTO.getLastName());
        address.setStreet(addressDTO.getStreet());
        address.setAddressComplement(addressDTO.getAddressComplement());
        address.setCity(addressDTO.getCity());
        address.setPostCode(addressDTO.getPostCode());
        address.setCountry(country);
        address.setPhoneNumber(addressDTO.getPhoneNumber());

        user.addAddress(address);
        address.setUser(user);
        Address _address = addressRepository.save(address);

        return fetchAddressDTO(_address.getId());
    }

    @Override
    public AddressDTO updateAddress(AddressDTO addressDTO) {

        User user = userService.getUser();
        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivility()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDTO().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = addressRepository.findById(addressDTO.getId()).orElseThrow(() -> new ApiRequestException("Address not found", HttpStatus.NOT_FOUND));

        address.setCivility(civility);
        address.setFirstName(addressDTO.getFirstName());
        address.setLastName(addressDTO.getLastName());
        address.setStreet(addressDTO.getStreet());
        address.setAddressComplement(addressDTO.getAddressComplement());
        address.setCity(addressDTO.getCity());
        address.setPostCode(addressDTO.getPostCode());
        address.setCountry(country);
        address.setPhoneNumber(addressDTO.getPhoneNumber());
        Address _address = addressRepository.save(address);

        return fetchAddressDTO(_address.getId());
    }

    @Override
    public List<AddressDTO> getUserAddress() {
        User user = userService.getUser();
        List<Address> addresses = addressRepository.findByUserId(user.getId());

        if(addresses.isEmpty()) {
            return List.of();
        }

        List<AddressDTO> addressDTOS = new ArrayList<AddressDTO>();

        addresses.forEach(_address -> {
            AddressDTO addressDTO = new AddressDTO();

            addressDTO.setId(_address.getId());
            addressDTO.setCivility(_address.getCivility().getId());
            addressDTO.setFirstName(_address.getFirstName());
            addressDTO.setLastName(_address.getLastName());
            addressDTO.setStreet(_address.getStreet());
            addressDTO.setAddressComplement(_address.getAddressComplement());
            addressDTO.setCity(_address.getCity());
            addressDTO.setPostCode(_address.getPostCode());

            CountryDTO countryDTO = new CountryDTO();
            countryDTO.setId(_address.getCountry().getId());
            countryDTO.setCountry(_address.getCountry().getName());
            addressDTO.setCountryDTO(countryDTO);
            addressDTO.setPhoneNumber(_address.getPhoneNumber());

            addressDTOS.add(addressDTO);
        });

        return addressDTOS;
    }

    @Override
    public Long deleteAddress(Long id) {
        addressRepository.deleteById(id);
        return id;
    }
}
