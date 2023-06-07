package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.dto.profile.ProfileDto;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<ProfileDto> getUserProfile() {

            return ResponseEntity.ok(userService.getUserProfile());
    }

    @PostMapping("/info")
    public ResponseEntity<MessageResponse> updateUserInfo(@Valid @RequestBody InfoDto infoDTO) {
            return ResponseEntity.ok((userService.updateUserInfo(infoDTO)));
    }

    @PostMapping("/email")
    public ResponseEntity<MessageResponse> updateUserEmail(@Valid @RequestBody EmailDto emailDTO) {
            return ResponseEntity.ok((userService.updateUserEmail(emailDTO)));
    }

}
