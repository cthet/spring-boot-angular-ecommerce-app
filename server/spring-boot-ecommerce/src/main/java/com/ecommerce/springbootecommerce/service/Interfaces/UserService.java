package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import org.apache.tomcat.jni.Address;

import java.util.List;

public interface UserService {
    String updateUser(User user);
    String addUserAddress(Address address);
    List<Address> getUserAddress();
    User getUser();
}
