package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.web.dto.ApparelsDTO;

public interface ApparelService {

    ApparelsDTO getApparelsByGender(int gender);
}
