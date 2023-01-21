package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.dto.profile.ProfileDto;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserPrincipalServiceImpl userPrincipalService;

    @Autowired
    CivilityRepository civilityRepository;

    @Autowired
    ModelMapper modelMapper;

    private final UserMapper userMapper;

    @Override
    public User getUser() {
        Long id = userPrincipalService.getUserPrincipalImpl().getId();
        return userRepository.findById(id).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public String updateUserInfo(InfoDto infoDTO) {
//        User user = this.getUser();

        User user = userMapper.infoDtoToUser(infoDTO);

//        Civility civility =  civilityRepository.findCivilityById(infoDTO.getCivility()).orElseThrow(() ->new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
//        user.setCivility(civility);
//        user.setFirstName(infoDTO.getFirstName());
//        user.setLastName(infoDTO.getLastName());
        userRepository.save(user);
        return "User Personal information successfully updated !";
    }

    @Override
    public String updateUserEmail(EmailDto emailDTO) {
        User user = this.getUser();
        user.setEmail(emailDTO.getEmail());
        userRepository.save(user);
        return "User email successfully updated !";
    }

    @Override
    public ProfileDto getUserProfile() {
        User user = this.getUser();
        InfoDto infoDto = userMapper.userToInfoDto(user);
      //  InfoDto infoDTO = new InfoDto(user.getCivility().getId(),user.getFirstName(),user.getLastName());
        EmailDto emailDto = new EmailDto(user.getEmail());
        return new ProfileDto(infoDto, emailDto);
    }



}

