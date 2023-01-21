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
import com.ecommerce.springbootecommerce.repository.UserRepository;
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
    UserRepository userRepository;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CivilityRepository civilityRepository;

    private final AddressMapper addressMapper;

    public Civility fetchCivility(int id){
      return  civilityRepository.findCivilityById(id).orElse(null);
    }



    @Override
    public AddressDto fetchAddressDTO(Long id) {
        Address address = addressRepository.findById(id).orElseThrow(() -> new ApiRequestException("Address not found!", HttpStatus.NOT_FOUND));

        AddressDto addressDto = addressMapper.addressToAddressDto(address);
//        AddressDto addressDTO = new AddressDto();
//        addressDTO.setId(id);
//        addressDTO.setCivility(_address.getCivility().getId());
//        addressDTO.setFirstName(_address.getFirstName());
//        addressDTO.setLastName(_address.getLastName());
//        addressDTO.setAddressComplement(_address.getAddressComplement());
//        addressDTO.setPostCode(_address.getPostCode());
//        addressDTO.setCity(_address.getCity());
//        addressDTO.setPhoneNumber(_address.getPhoneNumber());
//        addressDTO.setStreet(_address.getStreet());
//
//        CountryDto countryDTO = new CountryDto();
//        countryDTO.setId(_address.getCountry().getId());
//        countryDTO.setCountry(_address.getCountry().getName());
//        addressDTO.setCountryDTO(countryDTO);

        return addressDto;
    }

    public AddressDto createAddress(AddressDto addressDTO) {

        Optional<Address> optAddress = addressRepository.findById(addressDTO.getId());

        if(optAddress.isPresent()){
            throw new ApiRequestException("Address already exists !", HttpStatus.BAD_REQUEST);
        }

        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivilityDto().getId()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDto().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = addressMapper.addressDtoToAddress(addressDTO);
        address.setCivility(civility);
        address.setCountry(country);
        address.setUser(userService.getUser());

        return addressMapper.addressToAddressDto(addressRepository.save(address));

       // return fetchAddressDTO(_address.getId());
    }

    @Override
    public AddressDto updateAddress(AddressDto addressDTO) {

        addressRepository.findById(addressDTO.getId()).orElseThrow(() -> new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND));

        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivilityDto().getId()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDto().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        Address address = addressMapper.addressDtoToAddress(addressDTO);
        address.setCivility(civility);
        address.setCountry(country);
        address.setUser(userService.getUser());

        return addressMapper.addressToAddressDto(addressRepository.save(address));
      //  User user = userService.getUser();

    }

//        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivility()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
//        Country country = countryRepository.findById(addressDTO.getCountryDTO().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));
//
//        Address address = addressRepository.findById(addressDTO.getId()).orElseThrow(() -> new ApiRequestException("Address not found", HttpStatus.NOT_FOUND));
//
//        address.setCivility(civility);
//        address.setFirstName(addressDTO.getFirstName());
//        address.setLastName(addressDTO.getLastName());
//        address.setStreet(addressDTO.getStreet());
//        address.setAddressComplement(addressDTO.getAddressComplement());
//        address.setCity(addressDTO.getCity());
//        address.setPostCode(addressDTO.getPostCode());
//        address.setCountry(country);
//        address.setPhoneNumber(addressDTO.getPhoneNumber());
       // Address address = addressMapper.addressDtoToAddress(addressDTO);

//        user.addAddress(address);
//        address.setUser(user);
//
//        Address _address = addressRepository.save(address);
//
//        return addressMapper.addressToAddressDto(_address);



    @Override
    public List<AddressDto> getUserAddress() {
        User user = userService.getUser();
        List<Address> addresses = addressRepository.findByUserId(user.getId());

        if (addresses.isEmpty()) {
            return List.of();
        }

        return addressMapper.addressesToAddressesDto(addresses);
    }
//
//        List<AddressDto> addressDtos = new ArrayList<AddressDto>();
//
//        addresses.forEach(_address -> {
//            AddressDto addressDTO = new AddressDto();
//
//            addressDTO.setId(_address.getId());
//            addressDTO.setCivility(_address.getCivility().getId());
//            addressDTO.setFirstName(_address.getFirstName());
//            addressDTO.setLastName(_address.getLastName());
//            addressDTO.setStreet(_address.getStreet());
//            addressDTO.setAddressComplement(_address.getAddressComplement());
//            addressDTO.setCity(_address.getCity());
//            addressDTO.setPostCode(_address.getPostCode());
//
//            CountryDto countryDTO = new CountryDto();
//            countryDTO.setId(_address.getCountry().getId());
//            countryDTO.setCountry(_address.getCountry().getName());
//            addressDTO.setCountryDTO(countryDTO);
//            addressDTO.setPhoneNumber(_address.getPhoneNumber());
//
//            addressDtos.add(addressDTO);
//        });

        //return addressDtos;


    @Override
    public Long deleteAddress(Long id) {
        addressRepository.deleteById(id);
        return id;
    }
}
