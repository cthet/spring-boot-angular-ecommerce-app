package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.dto.address.CountryDto;
import com.ecommerce.springbootecommerce.dto.profile.CivilityDto;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import java.util.List;

import static org.hamcrest.Matchers.*;
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

    @Test
    @DisplayName("POST api/v1/address - CREATED")
    void createAddress() throws Exception {

        CivilityDto mockCivilityDto = new CivilityDto(1, "homme");
        CountryDto mockCountryDto = new CountryDto(1, "France", "FR");
        AddressDto mockAddressDto = new AddressDto();
        mockAddressDto.setCivilityDto(mockCivilityDto);
        mockAddressDto.setFirstName("John");
        mockAddressDto.setLastName("Doe");
        mockAddressDto.setStreet("123 Main Street");
        mockAddressDto.setAddressComplement("Apartment 4B");
        mockAddressDto.setPostCode(12345);
        mockAddressDto.setCity("Paris");
        mockAddressDto.setCountryDto(mockCountryDto);
        mockAddressDto.setPhoneNumber("0123456789");
        AddressDto mockSavedAddressDto = new AddressDto(1L, mockCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", mockCountryDto, "0123456789");
        doReturn(mockSavedAddressDto).when(addressService).saveAddress(mockAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(mockAddressDto);

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
    @DisplayName("POST api/v1/address - CONFLICT")
    void createAddressConflict() throws Exception {

        CivilityDto mockCivilityDto = new CivilityDto(1, "homme");
        CountryDto mockCountryDto = new CountryDto(1, "France", "FR");
        AddressDto mockAddressDto = new AddressDto(1L, mockCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", mockCountryDto, "0123456789");
        doThrow(new ApiRequestException("Address already exists !!", HttpStatus.CONFLICT))
                .when(addressService).saveAddress(mockAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(mockAddressDto);

        mockMvc.perform(post("/api/v1/address")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(addressDtoJson))
                .andExpect(status().isConflict());

    }

    @Test
    @DisplayName("PUT api/v1/address/1 - UPDATE")
    void updateAddressOk() throws Exception {

        CivilityDto mockCivilityDto = new CivilityDto(1, "homme");
        CountryDto mockCountryDto = new CountryDto(1, "France", "FR");
        AddressDto mockAddressDto = new AddressDto(1L, mockCivilityDto, "John", "Doe","123 Main Street", "Apartment 4B", 12345, "Paris", mockCountryDto, "0123456789");
        doReturn(mockAddressDto).when(addressService).updateAddress(1L, mockAddressDto);

        ObjectMapper objectMapper = new ObjectMapper();
        String addressDtoJson = objectMapper.writeValueAsString(mockAddressDto);

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
    @DisplayName("GET api/v1/address - FOUND")
    void getAddresses() throws Exception {

        CivilityDto mockCivilityDto = new CivilityDto(1, "homme");
        CountryDto mockCountryDto = new CountryDto(1, "France", "FR");
        AddressDto mockAddressDto = new AddressDto(1L, mockCivilityDto, "John", "Doe", "123 Main Street", "Apartment 4B", 12345, "Paris", mockCountryDto, "0123456789");
        List<AddressDto> addresses = new ArrayList<>();
                addresses.add(mockAddressDto);
        AddressResponse addressResponse = new AddressResponse(addresses);
        doReturn(addressResponse).when(addressService).getUserAddress();


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
    @DisplayName("GET /api/v1/address - EMPTY")
    void getAddressesEmpty() throws Exception {

        List<AddressDto> addresses = new ArrayList<>();
        AddressResponse addressResponse = new AddressResponse(addresses);
        doReturn(addressResponse).when(addressService).getUserAddress();

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
    void testProductDeleteSuccess() throws Exception {
        doNothing().when(addressService).deleteAddress(1L);

        mockMvc.perform(delete("/api/v1/address/1"))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("DELETE api/v1/address/1 - Not Found")
    void testProductDeleteNotFound() throws Exception {
        doThrow(new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND))
                .when(addressService).deleteAddress(1L);

        // Execute our DELETE request
        mockMvc.perform(delete("/api/v1/address/{id}", 1))
                .andExpect(status().isNotFound());
    }



}
