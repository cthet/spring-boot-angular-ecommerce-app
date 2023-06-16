package com.ecommerce.springbootecommerce.mappers;

import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.dto.product.ProductDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(source = "genderCategory.name", target = "gender_category")
    @Mapping(source = "apparelCategory.name", target = "product_category")
    @Mapping(source = "brandCategory.name", target = "brand_category")
    ProductDto productToProductDto(Product product);

    List<ProductDto> productsToProductsDto(List<Product> products);
}
