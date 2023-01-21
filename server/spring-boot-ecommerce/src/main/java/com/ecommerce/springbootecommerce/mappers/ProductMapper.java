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

    @Mapping(source = "gender_category", target = "genderCategory.name")
    @Mapping(source = "product_category", target = "apparelCategory.name")
    @Mapping(source = "brand_category", target = "brandCategory.name")
    Product productDtoToProduct(ProductDto productDto);

    List<Product> productsDtoToProducts(List<ProductDto> productsDto);

    List<ProductDto> productsToProductsDto(List<Product> products);
}
