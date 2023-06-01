package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import com.ecommerce.springbootecommerce.mappers.CartItemMapper;
import com.ecommerce.springbootecommerce.mappers.CartMapper;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private static final Logger logger = Logger.getLogger(CartServiceImpl.class.getName());

    @Autowired
    UserServiceImpl userService;
    @Autowired
    CartRepository cartRepository;
    @Autowired
    ProductRepository productRepository;


    private final CartMapper cartMapper;

    private final CartItemMapper cartItemMapper;

    @Override
    public CartDto getCartDTO() {

        User user = userService.getUser();

        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        if(optionalCart.isEmpty()){
            return new CartDto();
        }

        Cart cart = optionalCart.get();

        CartDto cartDto = cartMapper.cartToCartDto(cart);

        cart.getCartItems().forEach(cartItem -> {
            CartItemDto cartItemDto = cartItemMapper.cartItemToCartItemDto(cartItem);
            cartDto.addCartItemDto(cartItemDto);
        });

        return cartDto;
    }

    @Override
    public String saveCart(CartDto cartDTO) {

        Cart cart = cartMapper.cartDtoToCart(cartDTO);

        User user = userService.getUser();
        cart.setUser(user);

        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        if (optionalCart.isPresent()) {
            cart.setId(optionalCart.get().getId());
        }

        cartDTO.getCartItems().forEach(cartItemDto -> {
            CartItem cartItem = cartItemMapper.cartItemDtoToCartItem(cartItemDto);
            cart.addCartItem(cartItem);
        });

        cartRepository.save(cart);

        return "cart saved successfully";
    }

}
