package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.profile.EmailDTO;
import com.ecommerce.springbootecommerce.dto.profile.InfoDTO;
import com.ecommerce.springbootecommerce.dto.profile.ProfileResponse;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserPrincipalServiceImpl userPrincipalService;

    @Autowired
    CivilityRepository civilityRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public User getUser() {
        Long id = userPrincipalService.getUserPrincipalImpl().getId();
        return userRepository.findById(id).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public String updateUserInfo(InfoDTO infoDTO) {
        User user = this.getUser();

        Civility civility =  civilityRepository.findCivilityById(infoDTO.getCivility()).orElseThrow(() ->new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        user.setCivility(civility);
        user.setFirstName(infoDTO.getFirstName());
        user.setLastName(infoDTO.getLastName());
        userRepository.save(user);
        return "User Personal information successfully updated !";
    }

    @Override
    public String updateUserEmail(EmailDTO emailDTO) {
        User user = this.getUser();
        user.setEmail(emailDTO.getEmail());
        userRepository.save(user);
        return "User email successfully updated !";
    }

    @Override
    public ProfileResponse getUserProfile() {
        User user = this.getUser();
        InfoDTO infoDTO = new InfoDTO(user.getCivility().getId(),user.getFirstName(),user.getLastName());
        EmailDTO emailDTO = new EmailDTO(user.getEmail());
        return new ProfileResponse(infoDTO, emailDTO);
    }



}

