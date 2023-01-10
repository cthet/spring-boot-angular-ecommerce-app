package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.profile.EmailDTO;
import com.ecommerce.springbootecommerce.dto.profile.InfoDTO;
import com.ecommerce.springbootecommerce.dto.profile.ProfileResponse;

public interface UserService {
    String updateUserInfo(InfoDTO infoDTO);
    String updateUserEmail(EmailDTO emailDTO);
    ProfileResponse getUserProfile();
    User getUser();
}
