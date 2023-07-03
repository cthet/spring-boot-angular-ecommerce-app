package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.BrandCategory;
import com.github.database.rider.core.api.connection.ConnectionHolder;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.junit5.DBUnitExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith({DBUnitExtension.class, SpringExtension.class})
@SpringBootTest
@ActiveProfiles("test")
public class BrandCategoryRepositoryTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private BrandCategoryRepository repository;

    public ConnectionHolder getConnectionHolder() {
        return () -> dataSource.getConnection();
    }

    @Test
    @DataSet("brand_category.yml")
    @DisplayName("Test findByGenderCategoryId")
    @Transactional
    void testFindByGenderCategoryIdSuccess() {
        List<BrandCategory> brandCategories = repository.findByGenderCategoryIdAndProductsIsNotNull(1);

        assertFalse(brandCategories.isEmpty(), "brandCategories should not be empty");

        brandCategories.forEach(brandCategory ->
                assertTrue(brandCategory.getGenderCategories().stream().anyMatch(genderCategory ->
                        genderCategory.getId() == 1))
        );

    }

    @Test
    @DataSet("brand_category.yml")
    @DisplayName("Test findByGenderCategoryIdAndApparelCategoryId")
    @Transactional
    void testFindByGenderCategoryIdAndApparelCategoryId() {
        List<BrandCategory> brandCategories = repository.findByGenderCategoryIdAndApparelCategoryIdAndProductsIsNotNull(1, 2);

        assertFalse(brandCategories.isEmpty(), "brandCategories should not be empty");

        brandCategories.forEach(brandCategory ->
                assertTrue(brandCategory.getGenderCategories().stream().anyMatch(genderCategory ->
                        genderCategory.getId() == 1))
        );

        brandCategories.forEach(brandCategory ->
                assertTrue(brandCategory.getApparelCategories().stream().anyMatch(apparelCategory ->
                        apparelCategory.getId() == 2))
        );
    }

}
