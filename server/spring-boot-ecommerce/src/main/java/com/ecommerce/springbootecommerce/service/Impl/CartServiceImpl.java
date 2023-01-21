package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.repository.CartItemRepository;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
    ModelMapper modelMapper;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItemRepository cartItemRepository;

    @Override
    public CartDto getCartDTO() {

        CartDto cartDTO = new CartDto();

        User user = userService.getUser();
        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        if(optionalCart.isEmpty()){
            cartDTO.setCartItems(List.of());
            return cartDTO;
        }

        Cart cart = optionalCart.get();

        cartDTO.setTotalPrice(cart.getTotalPrice());
        cartDTO.setTotalQuantity(cart.getTotalQuantity());

        List<CartItemDto> cartItemsDTO = new ArrayList<CartItemDto>();

        cart.getCartItems().forEach(cartItem -> {
            CartItemDto cartItemDTO = new CartItemDto();

            cartItemDTO.setAmount(cartItem.getAmount());
            cartItemDTO.setQuantity(cartItem.getQuantity());

            ProductDto productDTO = new ProductDto();

            Product product = cartItem.getProduct();
            productDTO = modelMapper.map(product, ProductDto.class);
            productDTO.setGender_category(product.getGenderCategory().getName());
            productDTO.setBrand_category(product.getBrandCategory().getName());
            productDTO.setProduct_category(product.getApparelCategory().getName());

            cartItemDTO.setProductDTO(productDTO);

            cartItemsDTO.add(cartItemDTO);
        });
        cartDTO.setCartItems(cartItemsDTO);


        return cartDTO;

    }

    @Override
    public String saveCart(CartDto cartDTO) {

        User user = userService.getUser();
        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        Cart cart;
        if (optionalCart.isEmpty()) {
            cart = new Cart();
            cart.setUser(user);

            cartDTO.getCartItems().forEach(cartItemDto -> {
                Product product = new Product();
                product = modelMapper.map(cartItemDto.getProductDTO(), Product.class);

                CartItem cartItem = new CartItem();
                cartItem.setQuantity(cartItemDto.getQuantity());
                cartItem.setAmount(cartItemDto.getAmount());
                cartItem.setProduct(product);

                cart.addCartItem(cartItem);
            });
        } else {
            cart = optionalCart.get();
            List<CartItem> cartItems = new ArrayList<>(cart.getCartItems());

            List<Long> ProductsDTOIds = cartDTO.getCartItems().stream().map(cartItem ->
                    cartItem.getProductDTO().getId()).collect(Collectors.toList());


            cartItems.forEach(cartItem -> {
                if (!ProductsDTOIds.contains(cartItem.getProduct().getId())) {
                    cart.deleteCartItem(cartItem);
                }
            });
            cartDTO.getCartItems().forEach(cartItemDto -> {

                List<CartItem> _cartItems = cartItems.stream().filter(_cartItem ->
                    _cartItem.getProduct().getId().equals(cartItemDto.getProductDTO().getId())).collect(Collectors.toList());

                    CartItem _cartItem;
                    if(_cartItems.isEmpty())
                    {
                    _cartItem = new CartItem();
                    Product product = new Product();
                    product = modelMapper.map(cartItemDto.getProductDTO(), Product.class);
                    _cartItem.setProduct(product);
                    _cartItem.setQuantity(cartItemDto.getQuantity());
                    _cartItem.setAmount(cartItemDto.getAmount());
                    cart.addCartItem(_cartItem);
                } else {
                     _cartItem = _cartItems.get(0);
                     _cartItem.setAmount(cartItemDto.getAmount());
                     _cartItem.setQuantity(cartItemDto.getQuantity());
                     cart.addCartItem(_cartItem);
                    }
                });
        }

        cart.setTotalQuantity(cartDTO.getTotalQuantity());
        cart.setTotalPrice(cartDTO.getTotalPrice());
        cartRepository.save(cart);

        return "cart saved successfully";
    }

}
