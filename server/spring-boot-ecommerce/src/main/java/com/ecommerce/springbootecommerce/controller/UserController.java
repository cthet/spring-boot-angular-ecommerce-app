package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.user.UserDTO;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

}
