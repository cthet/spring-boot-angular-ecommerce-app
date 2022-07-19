package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import org.apache.tomcat.jni.Address;

import java.util.Set;

public interface UserService {
    String updateUser(User user);
    String addUserAddress(Address address);
    Set<Address> getUserAddress();

    User getUser();
}
