package com.ecommerce.springbootecommerce.security;

import com.ecommerce.springbootecommerce.domain.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Data
public class UserPrincipal implements UserDetails {

    private final Long id;
    private final String email;

    private final String password;

    private final Collection<? extends GrantedAuthority> authorities;

    public static UserPrincipal build(User user) {
        String userRole = user.getRoles().iterator().next().toString();

        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(userRole));

        return new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                authorities);
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
