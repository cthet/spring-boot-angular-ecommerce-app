package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Civility;
import com.ecommerce.springbootecommerce.domain.Order;
import com.ecommerce.springbootecommerce.dto.order.OrderDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = OrderItemMapper.class)
public interface OrderMapper {

    //@Mapping(target = "shippingAddressDto", source = "order.shippingAddress")
    OrderDto orderToOrderDto(Order order);

    //@Mapping(target = "shippingAddress", source = "orderDto.shippingAddressDto")
    Order orderDtoToOrder(OrderDto orderDto);

    List<OrderDto> ordersToOrdersDto(List<Order> orders);


//    @Mapping(target = "int", source = "civility.id")
//    Integer civilityToInt(Civility civility);


    default Integer map(Civility civility){
        return civility.getId();
    };

    default  Civility map(Integer value){
        return new Civility(value);
    };
}
