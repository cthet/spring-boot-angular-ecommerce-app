package com.ecommerce.springbootecommerce.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class MessageResponse {

    @NotBlank(message = "message cannot be blank")
    private String message;

}
