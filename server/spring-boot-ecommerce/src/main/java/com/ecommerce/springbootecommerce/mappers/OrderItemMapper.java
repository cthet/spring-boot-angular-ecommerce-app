package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.OrderItem;
import com.ecommerce.springbootecommerce.dto.order.OrderItemDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public interface OrderItemMapper {

    @Mapping(source = "product", target = "productDto")
    OrderItemDto orderItemToOrderItemDto(OrderItem orderItem);

    @Mapping(ignore = true, target = "product")
    OrderItem orderItemDtoToOrderItem(OrderItemDto orderItemDto);

    List<OrderItem> ordersItemsDtoToOrderItems(List<OrderItemDto> orderItemsDto);

    List<OrderItemDto> ordersItemsToOrderItemsDto(List<OrderItem> orderItems);

}
