package com.ecommerce.springbootecommerce.dto.profile;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class CivilityDto {

    @NotNull
    private int id;

    private String name;

}
