package com.ecommerce.springbootecommerce.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${jwtSecret}")
    private String jwtSecret;

    @Value("${jwtExpirationMs}")
    private int jwtExpirationMs;

    @Autowired
    UserDetailsServiceImpl userPrincipalService;

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }


    public String generateToken(String userEmail, String role){
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        Claims claims = Jwts.claims().setSubject(userEmail);
        claims.put("role", role);
        Date DateCreated = new Date();

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(DateCreated)
                .setExpiration(new Date(DateCreated.getTime() + jwtExpirationMs))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jws<Claims> claimsJws = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return !claimsJws.getBody().getExpiration().before(new Date());
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }
        return false;
    }

    public String resolveToken(HttpServletRequest request){
        String headerAuth = request.getHeader("Authorization");

        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7);
        }
        return null;
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public Authentication getAuthentication(String token){

        UserDetailsImpl userDetailsimpl = userPrincipalService.loadUserByUsername(getUserNameFromJwtToken(token));
        return new UsernamePasswordAuthenticationToken(userDetailsimpl, null, userDetailsimpl.getAuthorities());
    }
}
