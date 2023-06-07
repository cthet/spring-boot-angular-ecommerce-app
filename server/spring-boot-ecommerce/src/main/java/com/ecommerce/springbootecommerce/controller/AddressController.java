package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/address")
public class AddressController {

    private final AddressService addressService;

    @PostMapping
    public ResponseEntity<AddressDto> createAddress(@Valid @RequestBody AddressDto addressDTO) {
            return ResponseEntity.ok(addressService.createAddress(addressDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressDto> updateAddress(@Valid @RequestBody AddressDto addressDTO,
                                                    @PathVariable("id") Long id) {
            return ResponseEntity.ok(addressService.updateAddress(id, addressDTO));
    }

    @GetMapping
    public ResponseEntity<AddressResponse> getAddresses() {
            return ResponseEntity.ok(addressService.getUserAddress());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteAddress(@PathVariable("id") Long id) {
            addressService.deleteAddress(id);
            return new ResponseEntity<>(HttpStatus.OK);
    }

}
