package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserPrincipalServiceImpl userPrincipalService;

    @Autowired
    AddressRepository addressRepository;



    public String updateUser(String firstName, String lastName) {

        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));

        user.setFirstName(firstName);
        user.setLastName(lastName);
        userRepository.save(user);

        return "User successfully updated !";

    }

    public String addUserAddress(Address address) {

        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));


        Set<Address> addresses = addressRepository.findByUserId(user.getId());

        if(addresses != null) {
            for(Address _address: addresses) {
                //_address has a non null id

                if(     _address.getCountry().equals(address.getCountry())
                        && _address.getPostCode() == address.getPostCode()
                        && _address.getCity().equals(address.getCity())
                        && _address.getStreet().equals(address.getStreet())) {
                    return "Address already exists !";
                }
            }
        }

        user.addAddress(address);;
        addressRepository.save(address);

        return "Address successfully added !";

    }

}
