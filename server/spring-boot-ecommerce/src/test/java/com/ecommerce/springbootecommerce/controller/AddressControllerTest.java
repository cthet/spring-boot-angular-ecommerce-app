package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class AddressControllerTest {

    @MockBean
    private AddressService addressService;

    @Autowired
    private MockMvc mockMvc;

    private CivilityDto testCivilityDto;
    private CountryDto testCountryDto;
    private AddressDto testAddressDto;
    private AddressDto testSavedAddressDto;
    private List<AddressDto> testAddresses = new ArrayList<>();
    private AddressResponse testAddressResponse;
    private AddressResponse testEmptyAddressResponse;

    @BeforeEach
    void setUp() {
        testCivilityDto = new CivilityDto(1, "homme");
        testCountryDto = new CountryDto(1, "France", "FR");

        testAddressDto = new AddressDto();
        testAddressDto.setCivilityDto(testCivilityDto);
        testAddressDto.setFirstName("John");
        testAddressDto.setLastName("Doe");
        testAddressDto.setStreet("123 Main Street");
        testAddressDto.setAddressComplement("Apartment 4B");
        testAddressDto.setPostCode(12345);
        testAddressDto.setCity("Paris");
        testAddressDto.setCountryDto(testCountryDto);
        testAddressDto.setPhoneNumber("0123456789");
        testSavedAddressDto = new AddressDto(1L, testCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", testCountryDto, "0123456789");

        testAddresses.add(testSavedAddressDto);
        testAddressResponse = new AddressResponse();
        testAddressResponse.setAddresses(testAddresses);
        testEmptyAddressResponse = new AddressResponse();
        testEmptyAddressResponse.setAddresses(Collections.emptyList());
    }

    @Test
    @DisplayName("POST api/v1/address - Success")
    void testSaveAddressSuccess() throws Exception {

        doReturn(testSavedAddressDto).when(addressService).saveAddress(testAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(testAddressDto);

        mockMvc.perform(post("/api/v1/address")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(addressDtoJson))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.civility.id", is(1)))
                .andExpect(jsonPath("$.civility.name", is("homme")))
                .andExpect(jsonPath("$.firstName", is("John")))
                .andExpect(jsonPath("$.lastName", is("Doe")))
                .andExpect(jsonPath("$.street", is("123 Main Street")))
                .andExpect(jsonPath("$.addressComplement", is("Apartment 4B")))
                .andExpect(jsonPath("$.postCode", is(12345)))
                .andExpect(jsonPath("$.city", is("Paris")))
                .andExpect(jsonPath("$.country.id", is(1)))
                .andExpect(jsonPath("$.country.country", is("France")))
                .andExpect(jsonPath("$.country.code", is("FR")))
                .andExpect(jsonPath("$.phoneNumber", is("0123456789")));

    }

    @Test
    @DisplayName("POST api/v1/address - Conflict")
    void testSaveAddressConflict() throws Exception {

       doThrow(new ApiRequestException("Address already exists !!", HttpStatus.CONFLICT))
                .when(addressService).saveAddress(testAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(testAddressDto);

        mockMvc.perform(post("/api/v1/address")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(addressDtoJson))
                .andExpect(status().isConflict());

    }

    @Test
    @DisplayName("PUT api/v1/address/1 - Success")
    void testUpdateAddressSuccess() throws Exception {

        doReturn(testSavedAddressDto).when(addressService).updateAddress(1L, testSavedAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(testSavedAddressDto);

        mockMvc.perform(put("/api/v1/address/1")
                        .content(addressDtoJson)
                        .contentType(MediaType.APPLICATION_JSON))

                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.civility.id", is(1)))
                .andExpect(jsonPath("$.civility.name", is("homme")))
                .andExpect(jsonPath("$.firstName", is("John")))
                .andExpect(jsonPath("$.lastName", is("Doe")))
                .andExpect(jsonPath("$.street", is("123 Main Street")))
                .andExpect(jsonPath("$.addressComplement", is("Apartment 4B")))
                .andExpect(jsonPath("$.postCode", is(12345)))
                .andExpect(jsonPath("$.city", is("Paris")))
                .andExpect(jsonPath("$.country.id", is(1)))
                .andExpect(jsonPath("$.country.country", is("France")))
                .andExpect(jsonPath("$.country.code", is("FR")))
                .andExpect(jsonPath("$.phoneNumber", is("0123456789")));

    }

    @Test
    @DisplayName("GET api/v1/address - Success")
    void testGetAddresses() throws Exception {

        doReturn(testAddressResponse).when(addressService).getUserAddress();

        mockMvc.perform(get("/api/v1/address")
                        .contentType(MediaType.APPLICATION_JSON))

                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.addresses[0].id", is(1)))
                .andExpect(jsonPath("$.addresses[0].civility.id", is(1)))
                .andExpect(jsonPath("$.addresses[0].civility.name", is("homme")))
                .andExpect(jsonPath("$.addresses[0].firstName", is("John")))
                .andExpect(jsonPath("$.addresses[0].lastName", is("Doe")))
                .andExpect(jsonPath("$.addresses[0].street", is("123 Main Street")))
                .andExpect(jsonPath("$.addresses[0].addressComplement", is("Apartment 4B")))
                .andExpect(jsonPath("$.addresses[0].postCode", is(12345)))
                .andExpect(jsonPath("$.addresses[0].city", is("Paris")))
                .andExpect(jsonPath("$.addresses[0].country.id", is(1)))
                .andExpect(jsonPath("$.addresses[0].country.country", is("France")))
                .andExpect(jsonPath("$.addresses[0].country.code", is("FR")))
                .andExpect(jsonPath("$.addresses[0].phoneNumber", is("0123456789")));

    }


    @Test
    @DisplayName("GET /api/v1/address - Empty")
    void testGetAddressesEmpty() throws Exception {

        doReturn(testEmptyAddressResponse).when(addressService).getUserAddress();

        mockMvc.perform(get("/api/v1/address")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string("Vary", "Origin"))
                .andExpect(header().string("Content-Type", "application/json"))
                .andExpect(header().string("X-Content-Type-Options", "nosniff"))
                .andExpect(header().string("X-XSS-Protection", "0"))
                .andExpect(header().string("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate"))
                .andExpect(header().string("Pragma", "no-cache"))
                .andExpect(header().string("Expires", "0"))
                .andExpect(header().string("X-Frame-Options", "DENY"))

                .andExpect(jsonPath("$.addresses", hasSize(0)));

    }


    @Test
    @DisplayName("DELETE /api/v1/address/1 - Success")
    void testAddressDeleteSuccess() throws Exception {
        doNothing().when(addressService).deleteAddress(1L);

        mockMvc.perform(delete("/api/v1/address/1"))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("DELETE api/v1/address/1 - Not Found")
    void testAddressDeleteNotFound() throws Exception {
        doThrow(new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND))
                .when(addressService).deleteAddress(1L);

        mockMvc.perform(delete("/api/v1/address/{id}", 1))
                .andExpect(status().isNotFound());
    }



}
