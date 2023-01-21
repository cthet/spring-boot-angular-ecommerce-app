package com.ecommerce.springbootecommerce.configuration;

import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.repository.CivilityRepository;
import org.mapstruct.factory.Mappers;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfiguration {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        return mapper;
    }

    @Autowired
    private CivilityRepository civilityRepository;

    @Bean
    public AddressMapper addressMapper() {
        AddressMapper addressMapper = Mappers.getMapper(AddressMapper.class);
        return addressMapper;
    }

}
