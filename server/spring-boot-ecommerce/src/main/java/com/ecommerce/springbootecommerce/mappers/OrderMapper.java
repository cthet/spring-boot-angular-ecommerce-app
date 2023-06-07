package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {AddressMapper.class, OrderItemMapper.class})
public interface OrderMapper {

    @Mapping(target = "addressDto", source = "address")
    OrderDto orderToOrderDto(Order order);

    List<OrderDto> ordersToOrdersDto(List<Order> orders);

    default Integer map(Civility civility){
        return civility.getId();
    };

    default  Civility map(Integer value){
        return new Civility(value);
    };
}
