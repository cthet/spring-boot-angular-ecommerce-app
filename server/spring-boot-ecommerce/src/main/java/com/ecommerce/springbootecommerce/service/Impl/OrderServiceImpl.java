package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.*;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import com.ecommerce.springbootecommerce.mappers.AddressMapper;
import com.ecommerce.springbootecommerce.mappers.OrderItemMapper;
import com.ecommerce.springbootecommerce.mappers.OrderMapper;
import com.ecommerce.springbootecommerce.repository.AddressRepository;
import com.ecommerce.springbootecommerce.repository.OrderRepository;
import com.ecommerce.springbootecommerce.repository.ProductRepository;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.service.Interfaces.OrderService;
import com.ecommerce.springbootecommerce.service.Interfaces.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
    AddressRepository addressRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    private final AddressMapper addressMapper;

    private final OrderMapper orderMapper;

    private final OrderItemMapper orderItemMapper;

    private String generateOrderTrackingNumber () {
            return UUID.randomUUID().toString();
    }

    @Override
    public OrderDto saveOrder(OrderDto orderdto) {

        Order order = new Order();


//        Civility civility = civilityRepository.findCivilityById(addressDTO.getCivility()).orElseThrow(() -> new ApiRequestException("Civility not found", HttpStatus.NOT_FOUND));
//        Country country = countryRepository.findById(addressDTO.getCountryDTO().getId()).orElseThrow(() -> new ApiRequestException("Country not found", HttpStatus.NOT_FOUND));

        String orderTrackingNumber = this.generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        order.setTotalQuantity(order.getTotalQuantity());
        order.setTotalPrice(orderdto.getTotalPrice());

        Address address = addressRepository.findById(orderdto.getShippingAddressDto().getId()).orElseThrow(() -> new ApiRequestException("address not found !", HttpStatus.NOT_FOUND));
        order.setShippingAddress(address);

        List<OrderItemDto> orderItemDtos = orderdto.getOrderItems();
        orderItemDtos.forEach(orderItemDto -> {
            ProductDto productDto = orderItemDto.getProductDto();
            Product product = productRepository.findById(productDto.getId()).orElseThrow(() -> new ApiRequestException("product not found", HttpStatus.NOT_FOUND));

            OrderItem orderItem = new OrderItem();
            orderItem.setQuantity(orderItemDto.getQuantity());
            orderItem.setAmount(orderItemDto.getAmount());
            orderItem.setProduct(product);
            order.addOrderItem(orderItem);
        });

        User user = userService.getUser();
        user.addOrder(order);
        order.setUser(user);

        Order _order = orderRepository.save(order);

        return orderMapper.orderToOrderDto(_order);


//
//        AddressDto addressDTO = orderdto.getShippingAddressDto();
//
//        Address address = new Address();
//        address.setUser(user);
//        //address.setCivility(addressDTO.getCivility());
//        address.setFirstName(addressDTO.getFirstName());
//        address.setLastName(addressDTO.getLastName());
//        address.setStreet(addressDTO.getStreet());
//        address.setAddressComplement(addressDTO.getAddressComplement());
//        address.setCity(addressDTO.getCity());
//        address.setPostCode(addressDTO.getPostCode());
//        address.setCountry(country);
//        address.setPhoneNumber(addressDTO.getPhoneNumber());


//        Address address = modelMapper.map(addressDTO, Address.class);
//        Country country = new Country();
//        country.setId(addressDTO.getCountryDTO().getId());
//        country.setName(addressDTO.getCountryDTO().getCountry());
//        address.setCountry(country);
//        order.setShippingAddress(address);

//
//




    }

    @Override
    public List<OrderDto> fetchOrders() {
        return null;
    }

//    @Override
//    public List<OrderDto> fetchOrders() {
//        User user = userService.getUser();
//        List<Order> orders = orderRepository.findOrderByUserId(user.getId());
//
//        List<OrderDto> orderDtos = new ArrayList<OrderDto>();
//
//        orders.forEach(order -> {
//            OrderDto orderDTO = new OrderDto();
//
//            orderDTO.setTotalPrice(order.getTotalPrice());
//            orderDTO.setTotalQuantity(order.getTotalQuantity());
//
//            Address address = addressRepository.findById(order.getShippingAddress().getId()).orElseThrow(() -> new ApiRequestException("Address not found !", HttpStatus.NOT_FOUND));
//            AddressDto addressDTO = modelMapper.map(order.getShippingAddress(), AddressDto.class);
//            CountryDto countryDTO = new CountryDto();
//            countryDTO.setId(address.getCountry().getId());
//            countryDTO.setCountry(address.getCountry().getName());
//            addressDTO.setCountryDTO(countryDTO);
//            orderDTO.setShippingAddressDto(addressDTO);
//
//            List<OrderItemDto> orderItemDtos = new ArrayList<OrderItemDto>();
//
//            Set<OrderItem> orderItems = order.getOrderItems();
//
//            orderItems.forEach(orderItem -> {
//                        OrderItemDto orderItemDto = new OrderItemDto();
//                        orderItemDto.setAmount(orderItem.getAmount());
//                        orderItemDto.setQuantity(orderItem.getQuantity());
//                        orderItemDto.setProductDTO(modelMapper.map(orderItem.getProduct(), ProductDto.class));
//                        orderItemDtos.add(orderItemDto);
//            });
//            orderDTO.setOrderItems(orderItemDtos);
//            orderDtos.add(orderDTO);
//
//        });
//        return orderDtos;
//    }
}
