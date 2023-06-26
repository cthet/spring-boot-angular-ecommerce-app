package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/address")
public class AddressController {

    private final AddressService addressService;

    @GetMapping
    public ResponseEntity<AddressResponse> getAddresses() {
        return ResponseEntity.ok(addressService.getUserAddress());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressDto> getAddress(@PathVariable("id") Long id) {
        return ResponseEntity.ok(addressService.fetchAddressDTO(id));
    }


    @PostMapping
    public ResponseEntity<AddressDto> saveAddress(@Valid @RequestBody AddressDto addressDTO) {
            return ResponseEntity.ok(addressService.saveAddress(addressDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressDto> updateAddress(@Valid @RequestBody AddressDto addressDTO,
                                                    @PathVariable("id") Long id) {
            return ResponseEntity.ok(addressService.updateAddress(id, addressDTO));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteAddress(@PathVariable("id") Long id) {
            addressService.deleteAddress(id);
            return new ResponseEntity<>(HttpStatus.OK);
    }

}
