package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.mappers.CartItemMapper;
import com.ecommerce.springbootecommerce.mappers.CartMapper;
import com.ecommerce.springbootecommerce.repository.CartItemRepository;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    @Autowired
    UserServiceImpl userService;
    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItemRepository cartItemRepository;

    private final CartMapper cartMapper;

    private final CartItemMapper cartItemMapper;

    @Override
    public CartDto getCartDTO() {

        User user = userService.getUser();

        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        if(optionalCart.isEmpty()){
            return new CartDto();
        }

        CartDto cartDto = cartMapper.cartToCartDto(optionalCart.get());

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
