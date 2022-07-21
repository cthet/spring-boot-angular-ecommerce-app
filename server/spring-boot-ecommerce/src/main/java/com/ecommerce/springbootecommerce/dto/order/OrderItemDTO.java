package com.ecommerce.springbootecommerce.dto.order;

import com.ecommerce.springbootecommerce.dto.product.ProductDTO;
import lombok.Data;

@Data
public class OrderItemDTO {

    private Long quantity;

    private Long amount;

    private ProductDTO productDTO;
}
