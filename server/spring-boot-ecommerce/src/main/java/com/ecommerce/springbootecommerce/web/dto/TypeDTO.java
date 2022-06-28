package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TypeDTO {

    @JsonProperty("id")
    private int id;
    @JsonProperty("types")
    private String type;

}
