package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserPrincipalServiceImpl userPrincipalService;

    @Autowired
    AddressRepository addressRepository;

    @Override
    public User getUser() {
        Long id = userPrincipalService.getUserPrincipalImpl().getId();
        return userRepository.findById(id).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public String updateUser(String firstName, String lastName) {
        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));

        user.setFirstName(firstName);
        user.setLastName(lastName);
        userRepository.save(user);

        return "User successfully updated !";
    }


    @Override
    public List<Address> getUserAddress() {
        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));

        return addressRepository.findByUserId(user.getId());

    }
    @Override
    public String addUserAddress(Address address) {

        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));


        List<Address> addresses = addressRepository.findByUserId(user.getId());

        if (addresses != null) {
            for (Address _address : addresses) {
                //_address has a non null id

                if (_address.getCountry().equals(address.getCountry())
                        && _address.getPostCode() == address.getPostCode()
                        && _address.getCity().equals(address.getCity())
                        && _address.getStreet().equals(address.getStreet())) {
                    throw new ApiRequestException("Address already exists !", HttpStatus.BAD_REQUEST);
                }

            }
        }

            user.addAddress(address);

            addressRepository.save(address);

            return "Address successfully added !";

        }
    }

