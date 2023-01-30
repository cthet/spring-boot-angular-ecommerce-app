package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.dto.profile.ProfileDto;

public interface UserService {

    String updateUserInfo(InfoDto infoDTO);

    String updateUserEmail(EmailDto emailDTO);

    ProfileDto getUserProfile();

    User getUser();
}
