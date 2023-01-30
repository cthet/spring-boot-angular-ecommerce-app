package com.ecommerce.springbootecommerce.security;

import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserPrincipalServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserPrincipal loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException("User Not Found with email: " + email));

        return UserPrincipal.build(user);
    }

    public UserPrincipal getUserPrincipalImpl() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        //UserPrincipal userPrincipal = new UserPrincipal();

        return (UserPrincipal) auth.getPrincipal();
        //return modelMapper.map(auth.getPrincipal(),UserPrincipal.class);
    }

}
