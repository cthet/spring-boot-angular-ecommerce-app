package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.mappers.OrderItemMapper;
import com.ecommerce.springbootecommerce.mappers.OrderMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.OrderRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderServiceImpl.class);

    private final UserService userService;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final AddressRepository addressRepository;
    private final OrderMapper orderMapper;
    private final OrderItemMapper orderItemMapper;

    @Override
    @Transactional
    public OrderDto saveOrder(OrderDto orderDto) {
        validateOrderDto(orderDto);
        Order order = mapOrderDtoToOrder(orderDto);
        Order savedOrder = orderRepository.save(order);

        return orderMapper.orderToOrderDto(savedOrder);
    }

    @Override
    public OrderResponse fetchUserOrders() {
        User user = userService.getUser();
        List<Order> orders = orderRepository.findOrderByUserId(user.getId());
        List<OrderDto> orderDtos = orderMapper.ordersToOrdersDto(orders);
        logger.info("Liste des orders dto: " + orderDtos);
        return new OrderResponse(orderDtos);
    }

    private void validateOrderDto(OrderDto orderDto) {
        if (orderDto == null) {
            throw new ApiRequestException("OrderDto is null", HttpStatus.BAD_REQUEST);
        }
    }

    private Order mapOrderDtoToOrder(OrderDto orderDto) {
        Order order = orderMapper.orderDtoToOrder(orderDto);
        order.setOrderTrackingNumber(generateOrderTrackingNumber());
        order.setUser(userService.getUser());
        order.setAddress(getAddressFromOrderDto(orderDto));
        order.setOrderItems(mapOrderItemDtosToOrderItems(orderDto.getOrderItemDtos(), order));

        return order;
    }

    private String generateOrderTrackingNumber () {
        return UUID.randomUUID().toString();
    }

    private Address getAddressFromOrderDto(OrderDto orderDto) {
        Long addressId = orderDto.getAddressDto().getId();
        return addressRepository.findById(addressId)
                .orElseThrow(() -> new ApiRequestException("Address with ID " + addressId + " not found", HttpStatus.NOT_FOUND));
    }

    private List<OrderItem> mapOrderItemDtosToOrderItems(List<OrderItemDto> orderItemDtos, Order order) {
        return orderItemDtos.stream()
                .map(orderItemDto -> mapOrderItemDtoToOrderItem(orderItemDto, order))
                .collect(Collectors.toList());
    }

    private OrderItem mapOrderItemDtoToOrderItem(OrderItemDto orderItemDto, Order order) {
        OrderItem orderItem = orderItemMapper.orderItemDtoToOrderItem(orderItemDto);
        orderItem.setOrder(order);
        orderItem.setProduct(findProductById(orderItemDto.getProductDto().getId()));
        return orderItem;
    }


    private Product findProductById(Long productId){
        return  productRepository.findById(productId)
                .orElseThrow(() -> new ApiRequestException("Product with ID " + productId + " not found", HttpStatus.NOT_FOUND));
    }

}
