package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import org.apache.tomcat.jni.Address;

public interface UserService {

    String updateUser(User user);

    String addUserAddress(Address address);
}
