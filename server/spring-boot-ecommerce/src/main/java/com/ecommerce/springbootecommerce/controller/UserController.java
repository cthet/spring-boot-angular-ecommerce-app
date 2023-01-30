package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.profile.EmailDto;
import com.ecommerce.springbootecommerce.dto.profile.InfoDto;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile() {
        try {
            return ResponseEntity.ok(userService.getUserProfile());
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/info")
    public ResponseEntity<?> updateUserInfo(@Valid @RequestBody InfoDto infoDTO) {
        try {
            return ResponseEntity.ok(new MessageResponse(userService.updateUserInfo(infoDTO)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/email")
    public ResponseEntity<?> updateUserEmail(@Valid @RequestBody EmailDto emailDTO) {
        try {
            return ResponseEntity.ok(new MessageResponse(userService.updateUserEmail(emailDTO)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
