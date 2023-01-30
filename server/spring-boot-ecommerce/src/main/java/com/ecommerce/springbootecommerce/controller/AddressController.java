package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.address.AddressResponse;
import com.ecommerce.springbootecommerce.service.Interfaces.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/address")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping
    public ResponseEntity<?> createNewAddress(@Valid @RequestBody AddressDto addressDTO) {
        try {
            return ResponseEntity.ok(addressService.createAddress(addressDTO));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAddress(@Valid @RequestBody AddressDto addressDTO, @PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(addressService.updateAddress(addressDTO));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAddresses() {
        try {
            return ResponseEntity.ok(new AddressResponse(addressService.getUserAddress()));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteAddress(@PathVariable("id") Long id) {
        try {
            return new ResponseEntity(addressService.deleteAddress(id), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
            }
    }

}
