package com.ecommerce.springbootecommerce.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.security.sasl.AuthenticationException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
