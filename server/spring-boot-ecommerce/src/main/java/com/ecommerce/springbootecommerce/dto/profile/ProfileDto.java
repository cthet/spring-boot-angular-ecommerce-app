package com.ecommerce.springbootecommerce.dto.profile;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDto {

        @JsonProperty("personalInfo")
        private InfoDto infoDTO;

        @JsonProperty("email")
        private EmailDto emailDTO;

}
