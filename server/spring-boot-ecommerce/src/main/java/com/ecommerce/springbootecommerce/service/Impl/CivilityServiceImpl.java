package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CivilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CivilityServiceImpl implements CivilityService {

    private final CivilityRepository civilityRepository;

    @Override
    public Civility getCivilityById(int id) {
        return civilityRepository.findCivilityById(id)
                .orElseThrow(()-> new ApiRequestException("civility not found", HttpStatus.NOT_FOUND));
    }
}
