package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.CountryRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserDetailsImpl;
import com.ecommerce.springbootecommerce.security.UserDetailsServiceImpl;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AddressServiceTest {


    @MockBean
    private AddressRepository addressRepository;

    @MockBean
    private CivilityRepository civilityRepository;

    @MockBean
    private CountryRepository countryRepository;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private AddressMapper addressMapper;

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private UserDetailsServiceImpl userDetailsService;

    @MockBean
    private UserMapper userMapper;

    @Autowired
    private AddressService addressService;



    private CivilityDto testCivilityDto;
    private CountryDto testCountryDto;
    private AddressDto testAddressDto;

    private Civility testCivility;
    private Country testCountry;
    private Address testAddress;

    private User testUser;
    private UserDetailsImpl userDetailsImpl;



    @BeforeEach
    void setUp() {
        testCivility = new Civility();
        testCivility.setId(1);
        testCivility.setName("homme");

        testCountry = new Country();
        testCountry.setId(1);
        testCountry.setName("France");
        testCountry.setCode("FR");

        testUser = new User();
        testUser.setId(1L);
        testUser.setFirstName("John");
        testUser.setLastName("Doe");
        testUser.setRole(Set.of(Role.USER));

        userDetailsImpl = UserDetailsImpl.build(testUser);

        Authentication auth = new UsernamePasswordAuthenticationToken(userDetailsImpl, null, userDetailsImpl.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(auth);


        testAddress = new Address();
        testAddress.setId(1L);
        testAddress.setCivility(testCivility);
        testAddress.setFirstName("John");
        testAddress.setLastName("Doe");
        testAddress.setStreet("123 Main Street");
        testAddress.setAddressComplement("Apartment 4B");
        testAddress.setPostCode(12345);
        testAddress.setCity("Paris");
        testAddress.setCountry(testCountry);
        testAddress.setPhoneNumber("0123456789");

        testCivilityDto = new CivilityDto(1, "homme");
        testCountryDto = new CountryDto(1, "France", "FR");
        testAddressDto = new AddressDto(1L, testCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", testCountryDto, "0123456789");

    }

    @Test
    @DisplayName("Test saveAddress - Success")
    void testSaveAddressSuccess() throws Exception {
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.empty());
        given(civilityRepository.findCivilityById(testAddressDto.getCivilityDto().getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(testAddressDto.getCountryDto().getId())).willReturn(Optional.of(testCountry));

        given(userRepository.findById(testUser.getId())).willReturn(Optional.of(testUser));
        given(userDetailsService.getUserPrincipalImpl()).willReturn(userDetailsImpl);
        given(userService.getUser()).willReturn(testUser);
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(addressMapper.addressToAddressDto(testAddress)).willReturn(testAddressDto);
        given(addressRepository.save(testAddress)).willReturn(testAddress);


        AddressDto addressDto = addressService.saveAddress(testAddressDto);

        assertEquals(testAddressDto, addressDto);
    }

    @Test
    @DisplayName("Test saveAddress - Failure - Address already exists")
    void testSaveAddressFailureAddressExists() {
        given(addressRepository.findById(any())).willReturn(Optional.of(testAddress));

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Address already exists !", exception.getMessage());
        assertEquals(HttpStatus.CONFLICT, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test saveAddress - Failure - Civility not found")
    void testSaveAddressFailureCivilityNotFound() {
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.empty());
        given(civilityRepository.findCivilityById(testCivility.getId())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Civility not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test saveAddress - Failure - Country not found")
    void testSaveAddressFailureCountryNotFound() {
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.empty());
        given(civilityRepository.findCivilityById(testCivility.getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(any())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Country not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }


}
