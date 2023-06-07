package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
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

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final UserService userService;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final AddressRepository addressRepository;
    private final OrderMapper orderMapper;
    private final OrderItemMapper orderItemMapper;
    private final AddressMapper addressMapper;

    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }

    @Override
    public OrderDto saveOrder(OrderDto orderdto) {

        if(orderdto != null) {

            Order order = new Order();

            String orderTrackingNumber = this.generateOrderTrackingNumber();
            order.setOrderTrackingNumber(orderTrackingNumber);

            order.setTotalQuantity(orderdto.getTotalQuantity());
            order.setTotalPrice(orderdto.getTotalPrice());

            User user = userService.getUser();
            order.setUser(user);

            Address address = addressMapper.addressDtoToAddress(orderdto.getAddressDto());
            Address dbAddress = addressRepository.findById(address.getId())
                    .orElseThrow(() -> new ApiRequestException("product not found", HttpStatus.NOT_FOUND));
            order.setAddress(dbAddress);

            List<OrderItemDto> orderItemDtos = orderdto.getOrderItems();

            orderItemDtos.forEach((orderItemDto) -> {
                    OrderItem orderItem = orderItemMapper.orderItemDtoToOrderItem(orderItemDto);

                    Product product = productRepository.findById(orderItemDto.getProductDto().getId())
                            .orElseThrow(() -> new ApiRequestException("product not found", HttpStatus.NOT_FOUND));

                    orderItem.setOrder(order);
                    orderItem.setProduct(product);
                    order.addOrderItem(orderItem);
            });

            Order savedOrder = orderRepository.save(order);

            return orderMapper.orderToOrderDto(savedOrder);
        } else {
            throw new ApiRequestException("orderDto is null", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public OrderResponse fetchUserOrders() {

        User user = userService.getUser();
        List<Order> orders = orderRepository.findOrderByUserId(user.getId());

        List<OrderDto> orderDtos = orderMapper.ordersToOrdersDto(orders);

        return new OrderResponse(orderDtos);

    }

}
