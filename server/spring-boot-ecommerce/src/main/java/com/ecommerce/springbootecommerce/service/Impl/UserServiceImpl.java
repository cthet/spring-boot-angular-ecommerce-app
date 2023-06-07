package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.dto.profile.ProfileDto;
import com.ecommerce.springbootecommerce.mappers.UserMapper;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserDetailsServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserDetailsServiceImpl userDetailsService;
    private final UserMapper userMapper;

    @Override
    public User getUser() {
        return userRepository.findById(userDetailsService.getUserPrincipalImpl().getId())
                .orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public MessageResponse updateUserInfo(InfoDto infoDTO) {

        userRepository.save(userMapper.infoDtoToUser(infoDTO));

        return new MessageResponse("User Personal information successfully updated !");
    }

    @Override
    public MessageResponse updateUserEmail(EmailDto emailDTO) {

        User user = this.getUser();
        user.setEmail(emailDTO.getEmail());

        userRepository.save(user);

        return new MessageResponse("User email successfully updated !");
    }

    @Override
    public ProfileDto getUserProfile() {

        InfoDto infoDto = userMapper.userToInfoDto(this.getUser());
        EmailDto emailDto = new EmailDto(this.getUser().getEmail());

        return new ProfileDto(infoDto, emailDto);
    }

}

