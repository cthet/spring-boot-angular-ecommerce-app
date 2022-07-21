package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Address;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.domain.OrderItem;
import com.ecommerce.springbootecommerce.domain.User;
import com.ecommerce.springbootecommerce.dto.address.AddressDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDTO;
import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.CheckoutService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserPrincipalServiceImpl userPrincipalService;
    @Autowired
    private ModelMapper modelMapper;

    public String saveOrder(OrderRequest orderRequest) {

        Order order = new Order();

        String orderTrackingNumber = this.generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        AddressDTO addressDTO = orderRequest.getShippingAddressDTO();
        order.setShippingAddress(modelMapper.map(addressDTO, Address.class));

        OrderDTO orderDTO = orderRequest.getOrderDTO();
        order.setTotalQuantity(orderDTO.getTotalQuantity());
        order.setTotalPrice(orderDTO.getTotalPrice());

        List<OrderItemDTO> orderItemsDTO = orderRequest.getOrderItems();
        for(OrderItemDTO orderItemDTO: orderItemsDTO) {
            order.add(modelMapper.map(orderItemDTO, OrderItem.class));
        }

        //this feature allows to change the receiver from the user
        order.setFirstName(orderRequest.getUserDTO().getFirstName());
        order.setLastName(orderRequest.getUserDTO().getLastName());

        //find the authenticated user in DB to register the order in DB

        String emailPrincipal = userPrincipalService.getUserPrincipalImpl().getEmail();
        User user = userRepository.findByEmail(emailPrincipal).orElseThrow(() -> new ApiRequestException("User Principal not found", HttpStatus.NOT_FOUND));
        order.setUser(user);

        //register the order in DB

        user.addOrder(order);
        userRepository.save(user);

        return "Your order have been successfully registered !";

        }


    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }
}

