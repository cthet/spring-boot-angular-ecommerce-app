package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.domain.Cart;
import com.ecommerce.springbootecommerce.domain.CartItem;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.cart.CartDto;
import com.ecommerce.springbootecommerce.dto.cart.CartItemDto;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.CartItemMapper;
import com.ecommerce.springbootecommerce.mappers.CartMapper;
import com.ecommerce.springbootecommerce.repository.CartRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Impl.CartServiceImpl;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.math.BigDecimal;
import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CartServiceTest {

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private CartRepository cartRepository;

    @MockBean
    private ProductRepository productRepository;

    @MockBean
    private CartMapper cartMapper;

    @MockBean
    private CartItemMapper cartItemMapper;

    @Autowired
    private CartServiceImpl cartService;

    private User testUser;
    private Cart testCart;
    private CartDto testCartDto;
    private CartItem testCartItem;
    private CartItemDto testCartItemDto;
    private ProductDto testProductDto;

    @BeforeEach
    void setUp() {

        testUser = new User();
        testUser.setId(1L);
        testUser.setFirstName("John");
        testUser.setLastName("Doe");
        testUser.setRole(Set.of(Role.USER));

        testCartItem = new CartItem();
        testCartItem.setId(1L);
        testCartItem.setAmount(BigDecimal.valueOf(150.00));
        testCartItem.setQuantity(1);

        testCart = new Cart();
        testCart.setId(1L);
        testCart.setUser(testUser);
        testCart.setTotalQuantity(5);
        testCart.setTotalPrice(BigDecimal.valueOf(150.00));
        testCart.addCartItem(testCartItem);

        testProductDto = new ProductDto(1L, "product name", BigDecimal.valueOf(100), "productImageUrl", true, 100, "femme", "Manteaux", "Alexander McQueen");

        testCartItemDto = new CartItemDto();
        testCartItemDto.setAmount(BigDecimal.valueOf(150.00));
        testCartItemDto.setQuantity(1);
        testCartItemDto.setProductDto(testProductDto);

        testCartDto = new CartDto();
        testCartDto.setCartItems(new ArrayList<>(List.of(testCartItemDto)));

    }

    @Test
    @DisplayName("Test getCartDTO - Success")
    public void testGetCartDtoSuccess() {
        given(userService.getUser()).willReturn(testUser);
        given(cartRepository.findCartByUserId(testUser.getId())).willReturn((Optional.of(testCart)));
        given(cartMapper.cartToCartDto(testCart)).willReturn(testCartDto);
        given(cartItemMapper.cartItemToCartItemDto(testCartItem)).willReturn(testCartItemDto);

        CartDto cartDto = cartService.getCartDTO();

        assertEquals(testCartDto, cartDto);
    }

    @Test
    @DisplayName("Test getCartDTO - Empty")
    public void testGetCartDtoEmpty() {
        given(userService.getUser()).willReturn(testUser);
        given(cartRepository.findCartByUserId(testUser.getId())).willReturn((Optional.empty()));

        CartDto cartDto = cartService.getCartDTO();

        assertEquals(Collections.emptyList(), cartDto.getCartItems());
        assertEquals(0, cartDto.getTotalQuantity());
        assertEquals(BigDecimal.valueOf(0), cartDto.getTotalPrice());
    }

    @Test
    @DisplayName("Test saveCart - Success")
    public void testSaveCartSuccess() {
        given(userService.getUser()).willReturn(testUser);
        given(cartRepository.findCartByUserId(testUser.getId())).willReturn((Optional.of(testCart)));
        given(cartItemMapper.cartItemDtoToCartItem(testCartItemDto)).willReturn(testCartItem);

        cartService.saveCart(testCartDto);

        assertEquals(testCart.getTotalPrice(), testCartDto.getTotalPrice());
        assertEquals(testCart.getTotalQuantity(), testCartDto.getTotalQuantity());
        verify(cartItemMapper, times(1)).cartItemDtoToCartItem(testCartItemDto);

    }

}
