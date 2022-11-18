package com.ecommerce.springbootecommerce.dto.user;

import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

@Data
@AllArgsConstructor
public class UserResponse {

        private ProfileDTO profileDTO;

        private Set<AddressDTO> addressDTO;

}
