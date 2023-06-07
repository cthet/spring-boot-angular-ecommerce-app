package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.dto.profile.ProfileDto;

public interface UserService {

    User getUser();

    MessageResponse updateUserInfo(InfoDto infoDTO);

    MessageResponse updateUserEmail(EmailDto emailDTO);

    ProfileDto getUserProfile();


}
