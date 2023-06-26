package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Country;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
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

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

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
    private User testDifferentUser;
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

        testDifferentUser = new User();
        testDifferentUser.setId(2L);
        testDifferentUser.setFirstName("John");
        testDifferentUser.setLastName("Doe");
        testDifferentUser.setRole(Set.of(Role.USER));

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
        testAddress.setUser(testUser);

        testCivilityDto = new CivilityDto(1, "homme");
        testCountryDto = new CountryDto(1, "France", "FR");
        testAddressDto = new AddressDto(1L, testCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", testCountryDto, "0123456789");

    }

    @Test
    @DisplayName("Test saveAddress - Success")
    void testSaveAddressSuccess() throws Exception {
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.empty());
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(addressMapper.addressToAddressDto(testAddress)).willReturn(testAddressDto);

        given(civilityRepository.findCivilityById(testAddressDto.getCivilityDto().getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(testAddressDto.getCountryDto().getId())).willReturn(Optional.of(testCountry));

        given(userRepository.findById(testUser.getId())).willReturn(Optional.of(testUser));
        given(userDetailsService.getUserPrincipalImpl()).willReturn(userDetailsImpl);
        given(userService.getUser()).willReturn(testUser);

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
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.empty());
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(civilityRepository.findCivilityById(testAddressDto.getCivilityDto().getId())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Civility not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test saveAddress - Failure - Country not found")
    void testSaveAddressFailureCountryNotFound() {
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.empty());
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(civilityRepository.findCivilityById(testAddressDto.getCivilityDto().getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(testAddressDto.getCountryDto().getId())).willReturn(Optional.empty());


        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Country not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test updateAddress - Failure - Address not found")
    void testUpdateAddressFailureAddressNotFound() {
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.updateAddress(1L, testAddressDto));

        assertEquals("Address not found !", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test updateAddress - Failure - Check User Address failed")
    void testUpdateAddressFailureCheckUserAddress() {
        given(userService.getUser()).willReturn(testUser);
        testAddress.setUser(testDifferentUser);
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.of(testAddress));

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.updateAddress(1L, testAddressDto));

        assertEquals("Check User Address failed", exception.getMessage());
        assertEquals(HttpStatus.FORBIDDEN, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test updateAddress - Failure - Civility not found")
    void testUpdateAddressFailureCivilityNotFound() {
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.empty());
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(civilityRepository.findCivilityById(testCivility.getId())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Civility not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test updateAddress - Failure - Country not found")
    void testUpdateAddressFailureCountryNotFound() {
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.empty());
        given(addressMapper.addressDtoToAddress(testAddressDto)).willReturn(testAddress);
        given(civilityRepository.findCivilityById(testCivility.getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(any())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.saveAddress(testAddressDto));

        assertEquals("Country not found", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test updateAddress - Success")
    void testUpdateAddressSuccess() {
        given(addressRepository.findById(testAddressDto.getId())).willReturn(Optional.of(testAddress));
        given(userService.getUser()).willReturn(testUser);
        given(civilityRepository.findCivilityById(testCivility.getId())).willReturn(Optional.of(testCivility));
        given(countryRepository.findById(any())).willReturn(Optional.of(testCountry));
        given(addressRepository.save(testAddress)).willReturn(testAddress);

        given(addressMapper.addressToAddressDto(testAddress)).willReturn(testAddressDto);

        AddressDto addressDto = addressService.updateAddress(1L, testAddressDto);

        assertEquals(addressDto, testAddressDto);
    }

    @Test
    @DisplayName("Test fetchAddressDTO - Success")
    void testFetchAddressDtoSuccess() {
        given(addressRepository.findById(1L)).willReturn(Optional.of(testAddress));
        given(addressMapper.addressToAddressDto(testAddress)).willReturn(testAddressDto);

        AddressDto addressDto = addressService.fetchAddressDTO(1L);

        assertEquals(addressDto, testAddressDto);
    }

    @Test
    @DisplayName("Test fetchAddressDTO - Failure")
    void testFetchAddressDtoFailure() {
        given(addressRepository.findById(1L)).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> addressService.fetchAddressDTO(1L));

        assertEquals("Address not found !", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, ((ApiRequestException)exception).getStatus());
    }

    @Test
    @DisplayName("Test getUserAddress - Success")
    void testGetUserAddressSuccess() {
        given(userService.getUser()).willReturn(testUser);
        given(addressRepository.findByUserId(testUser.getId())).willReturn(List.of(testAddress));
        given(addressMapper.addressesToAddressesDto(List.of(testAddress))).willReturn(List.of(testAddressDto));

        AddressResponse addressResponse = addressService.getUserAddress();

        assertEquals(addressResponse.getAddresses(), List.of(testAddressDto));
    }

    @Test
    @DisplayName("Test getUserAddress - Empty")
    void testGetUserAddressEmpty() {
        given(userService.getUser()).willReturn(testUser);
        given(addressRepository.findByUserId(testUser.getId())).willReturn(Collections.emptyList());

        AddressResponse addressResponse = addressService.getUserAddress();

        assertEquals(addressResponse.getAddresses(), Collections.emptyList());
    }

    @Test
    @DisplayName("Test deleteAddress - Success")
    void testDeleteAddress() {
        given(addressRepository.findById(1L)).willReturn(Optional.of(testAddress));
        given(userService.getUser()).willReturn(testUser);

        addressService.deleteAddress(1L);

        verify(addressRepository, times(1)).deleteById(testAddress.getId());
    }

    @Test
    @DisplayName("Test deleteAddress - Failure - Check User Address failed")
    void testDeleteAddressFailureCheckUser() {
        given(addressRepository.findById(1L)).willReturn(Optional.of(testAddress));
        given(userService.getUser()).willReturn(testDifferentUser);

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> addressService.deleteAddress(1L));

        assertEquals("Check User Address failed", exception.getMessage());
        assertEquals(HttpStatus.FORBIDDEN, exception.getStatus());

        verify(addressRepository, never()).deleteById(testAddress.getId());
    }

    @Test
    @DisplayName("Test deleteAddress - Failure - Address not found")
    void testDeleteAddressFailureNotFound() {
        given(addressRepository.findById(1L)).willReturn(Optional.empty());

        ApiRequestException exception = assertThrows(ApiRequestException.class,
                () -> addressService.deleteAddress(1L));

        assertEquals("Address not found !", exception.getMessage());
        assertEquals(HttpStatus.NOT_FOUND, exception.getStatus());

        verify(addressRepository, never()).deleteById(testAddress.getId());
    }



}
