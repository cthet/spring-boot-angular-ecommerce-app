package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.ApparelCategory;
import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.category.ApparelCategoryDTO;
import com.ecommerce.springbootecommerce.dto.user.UserDTO;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/name")
    public ResponseEntity<?> updateUser(@Valid @RequestBody UserDTO userDTO) {
        try {

            String firstName = userDTO.getFirstName();
            String lastName = userDTO.getLastName();

            return ResponseEntity.ok(new MessageResponse(userService.updateUser(firstName, lastName)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/address")
    public ResponseEntity<?> addUserAddress(@Valid @RequestBody AddressDTO addressDTO) {
        try {
            Address address = modelMapper.map(addressDTO, Address.class);

            return ResponseEntity.ok(new MessageResponse(userService.addUserAddress(address)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/address")
    public ResponseEntity<?> getUserAddresses() {
        try {
            Set<Address> addresses = userService.getUserAddress();

            if(addresses.isEmpty()) {
                return new ResponseEntity<>("Addresses not found !", HttpStatus.NOT_FOUND);
            }

            Set<AddressDTO> addressDTOS = new HashSet<>();

            for(Address address: addresses){
                AddressDTO addressDTO = new AddressDTO();
                addressDTO = modelMapper.map(address, AddressDTO.class);
                addressDTOS.add(addressDTO);
            }

            modelMapper.map(addresses, Set<AddressDTO>.class);

            return new ResponseEntity<>(addresses, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }





}
