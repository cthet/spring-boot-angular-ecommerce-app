package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.MessageResponse;
import com.ecommerce.springbootecommerce.dto.profile.EmailDTO;
import com.ecommerce.springbootecommerce.dto.profile.InfoDTO;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/info")
    public ResponseEntity<?> updateUserInfo(@Valid @RequestBody InfoDTO infoDTO) {
        try {
            return ResponseEntity.ok(new MessageResponse(userService.updateUserInfo(infoDTO)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/email")
    public ResponseEntity<?> updateUserEmail(@Valid @RequestBody EmailDTO emailDTO) {
        try {
            return ResponseEntity.ok(new MessageResponse(userService.updateUserEmail(emailDTO)));
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile() {
        try {
            return ResponseEntity.ok(userService.getUserProfile());
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

}
