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

        return cartRepository.findCartByUserId(user.getId())
                .map(this::mapCartToDto)
                .orElseGet(CartDto::new);
    }

    private CartDto mapCartToDto(Cart cart) {
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
        Cart cart = getOrCreateCart(user);
        updateCartWithDto(cart, cartDTO);
        cartRepository.save(cart);
    }

    private Cart getOrCreateCart(User user) {
        return cartRepository.findCartByUserId(user.getId())
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return newCart;
                });
    }

    private void updateCartWithDto(Cart cart, CartDto cartDTO) {
        Map<Long, CartItem> cartItemMap = getCartItemsMap(cart);

        cart.clearCartItem();
        updateCartItems(cart, cartDTO, cartItemMap);

        cart.setTotalPrice(cartDTO.getTotalPrice());
        cart.setTotalQuantity(cartDTO.getTotalQuantity());
    }

    private Map<Long, CartItem> getCartItemsMap(Cart cart) {
        return cart.getCartItems().stream()
                .filter(item -> item.getProduct() != null)
                .collect(Collectors.toMap(item -> item.getProduct().getId(), item -> item));
    }

    private void updateCartItems(Cart cart, CartDto cartDTO, Map<Long, CartItem> cartItemMap) {
        cartDTO.getCartItems().forEach(cartItemDto -> {
            CartItem cartItem = cartItemMap.computeIfAbsent(cartItemDto.getProductDto().getId(), k -> cartItemMapper.cartItemDtoToCartItem(cartItemDto));
            cartItem.setQuantity(cartItemDto.getQuantity());
            cartItem.setAmount(cartItemDto.getAmount());
            cart.addCartItem(cartItem);
        });
    }

}
