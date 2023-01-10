package com.ecommerce.springbootecommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class MessageResponse {
    @NotBlank(message = "message cannot be blank")
    private String message;

}
