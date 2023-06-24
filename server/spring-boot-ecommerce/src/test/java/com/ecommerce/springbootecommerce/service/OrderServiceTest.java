package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.enums.Role;
import com.ecommerce.springbootecommerce.mappers.OrderItemMapper;
import com.ecommerce.springbootecommerce.mappers.OrderMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.OrderRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Impl.UserServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class OrderServiceTest {

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private OrderRepository orderRepository;

    @MockBean
    private ProductRepository productRepository;

    @MockBean
    private AddressRepository addressRepository;

    @MockBean
    private OrderMapper orderMapper;

    @MockBean
    private OrderItemMapper orderItemMapper;

    @Autowired
    private OrderService orderService;

    private User testUser;
    private Address testAddress;
    private AddressDto testAddressDto;
    private OrderItem testOrderItem;
    private OrderItemDto testOrderItemDto;
    private OrderDto testOrderDto;
    private Order testOrder;
    private ProductDto testProductDto;
    private Product testProduct;



    @BeforeEach
    void setup() {
        testUser = new User();
        testUser.setId(1L);
        testUser.setFirstName("John");
        testUser.setLastName("Doe");
        testUser.setRole(Set.of(Role.USER));

        testAddress = new Address();
        testAddress.setId(1L);
        testAddress.setFirstName("John");
        testAddress.setLastName("Doe");
        testAddress.setStreet("123 Main Street");
        testAddress.setUser(testUser);

        testAddressDto = new AddressDto();
        testAddressDto.setId(1L);
        testAddressDto.setFirstName("John");
        testAddressDto.setLastName("Doe");
        testAddressDto.setStreet("123 Main Street");

        testProductDto = new ProductDto();
        testProductDto.setId(1L);
        testProductDto.setUnitPrice(BigDecimal.valueOf(100));

        testOrderItemDto = new OrderItemDto();
        testOrderItemDto.setAmount(BigDecimal.valueOf(100));
        testOrderItemDto.setQuantity(1);
        testOrderItemDto.setProductDto(testProductDto);

        testOrderDto = new OrderDto();
        testOrderDto.setTotalPrice(BigDecimal.valueOf(100));
        testOrderDto.setTotalQuantity(1);
        testOrderDto.setAddressDto(testAddressDto);


        testOrder = new Order();
        testOrder.setId(1L);
        testOrder.setUser(testUser);
        testOrder.setAddress(testAddress);
        testOrder.setTotalPrice(BigDecimal.valueOf(100));
        testOrder.setTotalQuantity(1);

        testOrderItem = new OrderItem();
        testProduct = new Product();
        testProduct.setId(testProductDto.getId());

        testOrderDto.setOrderItems(Arrays.asList(testOrderItemDto));
        testOrder.setOrderItems(Arrays.asList(testOrderItem));


    }

    @Test
    @DisplayName("test saveOrder - Success")
    void testSaveorderSuccess() {
        given(userService.getUser()).willReturn(testUser);
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.of(testAddress));
        given(orderItemMapper.orderItemDtoToOrderItem(testOrderItemDto)).willReturn(testOrderItem);
        given(productRepository.findById(testProductDto.getId())).willReturn(Optional.of(testProduct));

        given(orderRepository.save(any(Order.class))).willReturn(testOrder);
        given(orderMapper.orderToOrderDto(testOrder)).willReturn(testOrderDto);


        OrderDto orderDto = orderService.saveOrder(testOrderDto);

        assertEquals(orderDto, testOrderDto);
    }

    @Test
    @DisplayName("test saveOrder - Failure - Address not found")
    void testSaveorderFailureAddressNotFound() {
        given(userService.getUser()).willReturn(testUser);
        given(addressRepository.findById(any())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> {
            orderService.saveOrder(testOrderDto);
        });

        String expectedMessage = "Address with ID " + testOrderDto.getAddressDto().getId() + " not found";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    @DisplayName("test saveOrder - Failure - Product not found")
    void testSaveorderFailureProductNotFound() {
        given(userService.getUser()).willReturn(testUser);
        given(addressRepository.findById(testAddress.getId())).willReturn(Optional.of(testAddress));
        given(orderItemMapper.orderItemDtoToOrderItem(testOrderItemDto)).willReturn(testOrderItem);
        given(productRepository.findById(testOrderItemDto.getProductDto().getId())).willReturn(Optional.empty());

        Exception exception = assertThrows(ApiRequestException.class, () -> {
            orderService.saveOrder(testOrderDto);
        });

        String expectedMessage = "Product with ID " + testOrderItemDto.getProductDto().getId() + " not found";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    @DisplayName("test fetchUserOrders - Success")
    void testFetchUserOrdersSuccess() {
        given(userService.getUser()).willReturn(testUser);
        given(orderRepository.findOrderByUserId(testUser.getId())).willReturn(List.of(testOrder));
        given(orderMapper.ordersToOrdersDto(List.of(testOrder))).willReturn(List.of(testOrderDto));

        OrderResponse orderResponse = orderService.fetchUserOrders();

        assertEquals(orderResponse.getOrderDtos(), List.of(testOrderDto));
    }


}
