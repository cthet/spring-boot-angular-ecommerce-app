package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDTO;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.repository.CartItemRepository;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.CartService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    UserServiceImpl userService;


    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItemRepository cartItemRepository;

    @Override
    public CartDTO getCartFromUser() {

        Long id = userService.getUser().getId();

        Cart cart = cartRepository.findCartByUserId(id).orElseThrow(() -> new ApiRequestException("No cart found in database!", HttpStatus.NOT_FOUND));

        CartDTO cartDTO = new CartDTO();

        List<CartItemDTO> cartItemsDTO = new ArrayList<CartItemDTO>();

        cart.getCartItems().forEach(cartItem -> {
            CartItemDTO cartItemDTO = new CartItemDTO();
            cartItemDTO = modelMapper.map(cartItem, CartItemDTO.class);

            ProductDTO productDTO = new ProductDTO();
            productDTO = modelMapper.map(cartItem.getProduct(), ProductDTO.class);
            cartItemDTO.setProductDTO(productDTO);

            cartItemsDTO.add(cartItemDTO);
        });
        cartDTO.setCartItems(cartItemsDTO);
        cartDTO.setTotalPrice(cart.getTotalPrice());
        cartDTO.setTotalQuantity(cart.getTotalQuantity());

        return cartDTO;

    }

    private void  deleteCartItemsNotPresentInCart(Cart cart, CartDTO cartDTO){

    }

    @Override
    public String saveCartUser(CartDTO cartDTO) {

        User user = userService.getUser();
        Optional<Cart> optionalCart = cartRepository.findCartByUserId(user.getId());

        Cart cart;
        if (optionalCart.isEmpty()) {
            cart = new Cart();
            cart.setUser(user);

            cartDTO.getCartItems().forEach(cartItemDTO -> {
                Product product = new Product();
                product = modelMapper.map(cartItemDTO.getProductDTO(), Product.class);

                CartItem cartItem = new CartItem();
                cartItem.setQuantity(cartItemDTO.getQuantity());
                cartItem.setAmount(cartItemDTO.getAmount());
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
            cartDTO.getCartItems().forEach(cartItemDTO -> {

                List<CartItem> _cartItems = cartItems.stream().filter(_cartItem ->
                    _cartItem.getProduct().getId().equals(cartItemDTO.getProductDTO().getId())).collect(Collectors.toList());

                    CartItem _cartItem;
                    if(_cartItems.isEmpty())
                    {
                    _cartItem = new CartItem();
                    Product product = new Product();
                    product = modelMapper.map(cartItemDTO.getProductDTO(), Product.class);
                    _cartItem.setProduct(product);
                    _cartItem.setQuantity(cartItemDTO.getQuantity());
                    _cartItem.setAmount(cartItemDTO.getAmount());
                    cart.addCartItem(_cartItem);
                } else {
                     _cartItem = _cartItems.get(0);
                     _cartItem.setAmount(cartItemDTO.getAmount());
                     _cartItem.setQuantity(cartItemDTO.getQuantity());
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
