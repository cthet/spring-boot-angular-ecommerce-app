package com.ecommerce.springbootecommerce.Exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

/*
 Custom exception to handle errors related to API requests.
 This exception contains an HTTP status that can be used to define the HTTP response.
 */

@Getter
public class ApiRequestException extends RuntimeException {
    private final HttpStatus status;

    public ApiRequestException(String message, HttpStatus status){
        super(message);
        this.status = status;
    }
}
