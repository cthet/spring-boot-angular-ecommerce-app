package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Product;
import com.github.database.rider.core.api.connection.ConnectionHolder;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.junit5.DBUnitExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;

import static org.hibernate.validator.internal.util.Contracts.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@ExtendWith({DBUnitExtension.class, SpringExtension.class})
@SpringBootTest
@ActiveProfiles("test")
public class ProductRepositoryTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private ProductRepository repository;

    public ConnectionHolder getConnectionHolder() {
        return () -> dataSource.getConnection();
    }

    @Test
    @DataSet("product.yml")
    @DisplayName("Test findNewProductByGenderCategoryId")
    @Transactional
    void findNewProductByGenderCategoryId() {
        PageRequest testPagingSort = PageRequest.of(0, 1);
        Page<Product> newProductPage = repository.findNewProductByGenderCategoryId(1, testPagingSort);

        assertFalse(newProductPage.isEmpty(), "newProductPage should not be empty");

        newProductPage.forEach(product -> {
                    assertTrue(product.getNewProduct(), "Product should be new");
                    assertEquals(1, product.getGenderCategory().getId(), "Product should have gender category id 1");
                }
        );

        assertEquals(1, newProductPage.getTotalElements(), "The total number of products should match the expected number of new products");

    }

}
