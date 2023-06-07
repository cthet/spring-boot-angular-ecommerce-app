package com.ecommerce.springbootecommerce.Exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * Exception personnalisée pour gérer les erreurs liées aux requêtes API.
 * Cette exception contient un statut HTTP qui peut être utilisé pour définir la réponse HTTP.
 */

@Getter
public class ApiRequestException extends RuntimeException {
    private final HttpStatus status;

    public ApiRequestException(String message, HttpStatus status){
        super(message);
        this.status = status;
    }
}
