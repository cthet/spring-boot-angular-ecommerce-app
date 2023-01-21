package com.ecommerce.springbootecommerce.dto.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CivilityDto {

    @NotNull
    private int id;

    private String name;

}
