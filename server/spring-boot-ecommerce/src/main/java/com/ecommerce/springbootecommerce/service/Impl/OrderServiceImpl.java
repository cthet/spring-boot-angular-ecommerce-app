package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.address.AddressDto;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.mappers.OrderItemMapper;
import com.ecommerce.springbootecommerce.mappers.OrderMapper;
import com.ecommerce.springbootecommerce.repository.*;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    @Autowired
    UserService userService;

    @Autowired
    CivilityRepository civilityRepository;

    @Autowired
    CountryRepository countryRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ShippingAddressRepository shippingAddressRepository;

    private final OrderMapper orderMapper;

    private final OrderItemMapper orderItemMapper;

    private final AddressMapper addressMapper;

    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }

    private ShippingAddress getShippingAddress(AddressDto addressDTO) {

        ShippingAddress shippingAddress = addressMapper.addressDtoToShippingAddress(addressDTO);

        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivilityDto().getId())
                .orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
        Country country = countryRepository.findById(addressDTO.getCountryDto().getId())
                .orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        shippingAddress.setCivility(civility);
        shippingAddress.setCountry(country);
        return shippingAddressRepository.save(shippingAddress);

    }

    @Override
    public OrderDto saveOrder(OrderDto orderdto) {

        Order order = new Order();

        User user = userService.getUser();
        user.addOrder(order);

        ShippingAddress shippingAddress = this.getShippingAddress(orderdto.getAddressDto());
        order.setShippingAddress(shippingAddress);

        String orderTrackingNumber = this.generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        order.setTotalQuantity(orderdto.getTotalQuantity());
        order.setTotalPrice(orderdto.getTotalPrice());

        List<OrderItemDto> orderItemDtos = orderdto.getOrderItems();

        orderItemDtos.forEach(orderItemDto -> {
            Product product = productRepository.findById(orderItemDto.getProductDto().getId()).orElseThrow(() -> new ApiRequestException("product not found", HttpStatus.NOT_FOUND));
            OrderItem orderItem = orderItemMapper.orderItemDtoToOrderItem(orderItemDto);
            orderItem.setProduct(product);
            order.addOrderItem(orderItem);
        });


        order.setShippingAddress(shippingAddress);

        Order savedOrder = orderRepository.save(order);

        return orderMapper.orderToOrderDto(savedOrder);
    }

    @Override
    public List<OrderDto> fetchOrders() {

        User user = userService.getUser();
        List<Order> orders = orderRepository.findOrderByUserId(user.getId());

        List<OrderDto> orderDtos = orderMapper.ordersToOrdersDto(orders);

        return orderDtos;
    }
}
