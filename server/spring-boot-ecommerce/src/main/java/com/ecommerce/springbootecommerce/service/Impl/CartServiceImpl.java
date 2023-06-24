package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import com.ecommerce.springbootecommerce.mappers.CartItemMapper;
import com.ecommerce.springbootecommerce.mappers.CartMapper;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final UserServiceImpl userService;
    private final CartRepository cartRepository;
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

        User user = userService.getUser();

        Cart cart = cartRepository.findCartByUserId(user.getId())
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return newCart;
                });

        Map<Long, CartItem> cartItemMap = cart.getCartItems().stream()
                .filter(item -> item.getProduct() != null)
                .collect(Collectors.toMap(item -> item.getProduct().getId(), item -> item));

        cart.clearCartItem();

        cartDTO.getCartItems().forEach(cartItemDto -> {
            CartItem cartItem = cartItemMap.get(cartItemDto.getProductDto().getId());

            if (cartItem == null) {
                cartItem = cartItemMapper.cartItemDtoToCartItem(cartItemDto);
            } else {
                cartItem.setQuantity(cartItemDto.getQuantity());
                cartItem.setAmount(cartItemDto.getAmount());
            }

            cart.addCartItem(cartItem);

        });
        cart.setTotalPrice(cartDTO.getTotalPrice());
        cart.setTotalQuantity(cartDTO.getTotalQuantity());

        cartRepository.save(cart);
    }

}
