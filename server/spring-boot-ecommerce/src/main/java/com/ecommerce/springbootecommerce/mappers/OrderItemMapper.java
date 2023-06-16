package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.OrderItem;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public interface OrderItemMapper {

    @Mapping(ignore = true, target = "product")
    @Mapping(ignore = true, target = "id")
    @Mapping(ignore = true, target = "order")
    OrderItem orderItemDtoToOrderItem(OrderItemDto orderItemDto);

    @Mapping(source = "product", target = "productDto")
    OrderItemDto orderItemToOrderItemDto(OrderItem orderItem);

    List<OrderItemDto> ordersItemsToOrderItemsDto(List<OrderItem> orderItems);
}
