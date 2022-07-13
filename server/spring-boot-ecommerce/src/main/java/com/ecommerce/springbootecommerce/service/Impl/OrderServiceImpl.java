package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.order.OrderResponse;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public OrderResponse registerOrder(OrderRequest orderRequest) {

//        Product product = productRepository.findById(productId).orElseThrow(() -> new ApiRequestException("Product not found", HttpStatus.NOT_FOUND));
//        ProductDTO productDTO = new ProductDTO();
//        productDTO = modelMapper.map(product, ProductDTO.class);

        Order order = new Order();

        order.setUser(orderRequest.getUser());
        order.setOrderItems(orderRequest.getOrderItems());

        AddressDTO adressDTO = orderRequest.getShippingAddress();
        order.setShippingAddress(modelMapper.map(adressDTO, Address.class));

        OrderDTO orderDTO = orderRequest.getOrderDTO();
        order.setTotalQuantity(orderDTO.getTotalQuantity());
        order.setTotalPrice(orderDTO.getTotalPrice());

        String email = orderRequest.getUser().getEmail();

        //register the order in DB
        User userFromDB = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        userFromDB.addOrder(order);
        userRepository.save(userFromDB);

        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setOrderTrackingNumber(order.getOrderTrackingNumber());

        return orderResponse;
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
