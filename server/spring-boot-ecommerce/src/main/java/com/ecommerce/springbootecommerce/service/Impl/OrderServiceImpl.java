package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.address.CountryDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDTO;
import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.OrderRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    UserService userService;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    private ModelMapper modelMapper;

    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }

    @Override
    public String saveOrder(OrderDTO orderdto) {

        Order order = new Order();

        String orderTrackingNumber = this.generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        order.setTotalQuantity(order.getTotalQuantity());
        order.setTotalPrice(orderdto.getTotalPrice());

        AddressDTO addressDTO = orderdto.getShippingAddressDTO();
        Address address = modelMapper.map(addressDTO, Address.class);
        Country country = new Country();
        country.setId(addressDTO.getCountryDTO().getId());
        country.setName(addressDTO.getCountryDTO().getCountry());
        address.setCountry(country);
        order.setShippingAddress(address);

        List<OrderItemDTO> orderItemDTOS = orderdto.getOrderItems();
        orderItemDTOS.forEach(orderItemDTO -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setQuantity(orderItemDTO.getQuantity());
            orderItem.setAmount(orderItemDTO.getAmount());
            orderItem.setProduct(modelMapper.map(orderItemDTO.getProductDTO(), Product.class));
            order.addOrderItem(orderItem);
        });

        User user = userService.getUser();
        user.addOrder(order);
        userRepository.save(user);

        return "Order saved successfully !";

    }

    @Override
    public List<OrderDTO> fetchOrders() {
        User user = userService.getUser();
        List<Order> orders = orderRepository.findOrderByUserId(user.getId());

        List<OrderDTO> orderDTOS = new ArrayList<OrderDTO>();

        orders.forEach(order -> {
            OrderDTO orderDTO = new OrderDTO();

            orderDTO.setTotalPrice(order.getTotalPrice());
            orderDTO.setTotalQuantity(order.getTotalQuantity());

            Address address = addressRepository.findById(order.getShippingAddress().getId()).orElseThrow(() -> new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND));
            AddressDTO addressDTO = modelMapper.map(order.getShippingAddress(), AddressDTO.class);
            CountryDTO countryDTO = new CountryDTO();
            countryDTO.setId(address.getCountry().getId());
            countryDTO.setCountry(address.getCountry().getName());
            addressDTO.setCountryDTO(countryDTO);
            orderDTO.setShippingAddressDTO(addressDTO);

            List<OrderItemDTO> orderItemDTOs = new ArrayList<OrderItemDTO>();

            Set<OrderItem> orderItems = order.getOrderItems();

            orderItems.forEach(orderItem -> {
                        OrderItemDTO orderItemDTO = new OrderItemDTO();
                        orderItemDTO.setAmount(orderItem.getAmount());
                        orderItemDTO.setQuantity(orderItem.getQuantity());
                        orderItemDTO.setProductDTO(modelMapper.map(orderItem.getProduct(), ProductDTO.class));
                        orderItemDTOs.add(orderItemDTO);
            });
            orderDTO.setOrderItems(orderItemDTOs);
            orderDTOS.add(orderDTO);

        });
        return orderDTOS;
    }
}
