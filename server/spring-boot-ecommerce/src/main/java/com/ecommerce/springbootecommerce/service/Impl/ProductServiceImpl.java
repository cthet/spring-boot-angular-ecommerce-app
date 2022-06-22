package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.Exception.ApiRequestException;
import com.ecommerce.springbootecommerce.domain.Product;
import com.ecommerce.springbootecommerce.repositories.ProductRepository;
import com.ecommerce.springbootecommerce.service.interfaces.ProductService;
import com.ecommerce.springbootecommerce.web.dto.ProductDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper = new ModelMapper();

    public Sort.Direction getSortDirection(String direction) {
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }
        return Sort.Direction.ASC;
    }

    @Override
    public ProductDTO getProductDTOById(Long productId) {

        Product product = productRepository.findById(productId).orElseThrow(() -> new ApiRequestException("Apparel not found", HttpStatus.NOT_FOUND));

        ProductDTO productDTO = new ProductDTO();

        productDTO = ModelMapper.map(product, ProductDTO.class);


    }

//    @Override
//    public Map<String, Object> getProducts(String gender, String apparel, String priceRange, int page, int size, String[] sort) {
//
//        List<Order> orders = new ArrayList<Order>();
//        orders.add(new Order(getSortDirection))
//
//
//        return null;
//    }
}
