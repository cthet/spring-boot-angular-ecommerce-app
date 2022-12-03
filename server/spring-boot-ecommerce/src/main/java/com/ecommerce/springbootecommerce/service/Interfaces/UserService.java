package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.User;

import java.util.List;

public interface UserService {
    String updateUser(String firstName, String lastName);
    String addUserAddress(Address address);
    List<Address>  getUserAddress();
    User getUser();
}
