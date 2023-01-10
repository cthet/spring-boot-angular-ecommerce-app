package com.ecommerce.springbootecommerce.dto.profile;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProfileResponse {

        private InfoDTO infoDTO;

        private EmailDTO emailDTO;

}
