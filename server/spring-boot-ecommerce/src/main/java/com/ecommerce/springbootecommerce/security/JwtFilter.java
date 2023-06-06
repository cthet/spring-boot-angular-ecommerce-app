package com.ecommerce.springbootecommerce.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.security.sasl.AuthenticationException;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    JwtUtils jwtUtils;

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        try {
            String token = jwtUtils.resolveToken(request);

            if (token != null && jwtUtils.validateJwtToken(token)) {

                Authentication authentication = jwtUtils.getAuthentication(token);

                if(authentication!=null){
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        } catch(Exception e){
                logger.error("Cannot set user authentication: {}", e);
                SecurityContextHolder.clearContext();
                throw new AuthenticationException("JWT token is expired or invalid");
        }
        filterChain.doFilter(request, response);
    }
}
