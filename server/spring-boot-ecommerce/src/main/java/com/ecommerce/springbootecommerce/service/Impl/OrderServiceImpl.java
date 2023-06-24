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
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final UserService userService;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final AddressRepository addressRepository;
    private final OrderMapper orderMapper;
    private final OrderItemMapper orderItemMapper;

    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }

    @Override
    @Transactional
    public OrderDto saveOrder(OrderDto orderDto) {
        validateOrderDto(orderDto);

        Order order = createOrder(orderDto);

        Order savedOrder = orderRepository.save(order);

        return orderMapper.orderToOrderDto(savedOrder);

    }

    @Override
    public OrderResponse fetchUserOrders() {

        User user = userService.getUser();
        List<Order> orders = orderRepository.findOrderByUserId(user.getId());

        List<OrderDto> orderDtos = orderMapper.ordersToOrdersDto(orders);

        return new OrderResponse(orderDtos);

    }

    private void validateOrderDto(OrderDto orderDto) {
        if (orderDto == null) {
            throw new ApiRequestException("OrderDto is null", HttpStatus.BAD_REQUEST);
        }

    }

    private Order createOrder(OrderDto orderDto) {
        Order order = new Order();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        order.setTotalQuantity(orderDto.getTotalQuantity());
        order.setTotalPrice(orderDto.getTotalPrice());

        User user = userService.getUser();
        order.setUser(user);

        Address address = getAddressFromDto(orderDto);
        order.setAddress(address);

        List<OrderItem> orderItems = createOrderItemsFromDto(orderDto, order);
        order.setOrderItems(orderItems);

        return order;
    }

    private Address getAddressFromDto(OrderDto orderDto) {
        Long addressId = orderDto.getAddressDto().getId();
        return addressRepository.findById(addressId)
                .orElseThrow(() -> new ApiRequestException("Address with ID " + addressId + " not found", HttpStatus.NOT_FOUND));
    }

    private List<OrderItem> createOrderItemsFromDto(OrderDto orderDto, Order order) {
        List<OrderItemDto> orderItemDtos = orderDto.getOrderItems();

        return orderItemDtos.stream()
                .map(orderItemDto -> createOrderItemFromDto(orderItemDto, order))
                .collect(Collectors.toList());
    }

    private OrderItem createOrderItemFromDto(OrderItemDto orderItemDto, Order order) {
        OrderItem orderItem = orderItemMapper.orderItemDtoToOrderItem(orderItemDto);

        Product product = productRepository.findById(orderItemDto.getProductDto().getId())
                .orElseThrow(() -> new ApiRequestException("Product with ID " + orderItemDto.getProductDto().getId() + " not found", HttpStatus.NOT_FOUND));

        orderItem.setOrder(order);
        orderItem.setProduct(product);

        return orderItem;
    }

}
