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

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

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
    public void saveCart(CartDto cartDTO) {

        Cart cart = cartMapper.cartDtoToCart(cartDTO);

        User user = userService.getUser();
        cart.setUser(user);

        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        if (optionalCart.isPresent()) {
            cart.setId(optionalCart.get().getId());
        }

        cartDTO.getCartItems().forEach(cartItemDto -> {
            CartItem cartItem = cartItemMapper.cartItemDtoToCartItem(cartItemDto);

            Optional<CartItem> existingCartItem = cart.getCartItems()
                    .stream()
                    .filter(item -> item.getProduct().getId().equals(cartItemDto.getProductDto().getId()))
                    .findFirst();

            if (existingCartItem.isPresent()) {
                existingCartItem.get().setQuantity(cartItemDto.getQuantity());
            } else {
                cart.addCartItem(cartItem);
            }
        });

        cartRepository.save(cart);
    }

}
