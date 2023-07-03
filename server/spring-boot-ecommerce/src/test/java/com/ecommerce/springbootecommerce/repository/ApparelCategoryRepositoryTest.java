package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.ApparelCategory;
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

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith({DBUnitExtension.class, SpringExtension.class})
@SpringBootTest
@ActiveProfiles("test")
public class ApparelCategoryRepositoryTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private ApparelCategoryRepository repository;

    public ConnectionHolder getConnectionHolder() {
        return () -> dataSource.getConnection();
    }

    @Test
    @DataSet("apparel_category.yml")
    @DisplayName("Test findById")
    void testFindAllSuccess() {
        List<ApparelCategory> apparelCategories = repository.findAll();

        assertFalse(apparelCategories.isEmpty(), "Apparel categories list should not be empty");
        assertEquals(2, apparelCategories.size(), "we should have 2 apparel categories");

    }

    @Test
    @DataSet("apparel_category.yml")
    @DisplayName("Test findByGenderCategoryId")
    @Transactional
    void testFindByGenderCategoryId() {
        List<ApparelCategory> apparelCategories = repository.findByGenderCategoryIdAndProductsIsNotNull(1);

        assertFalse(apparelCategories.isEmpty(), "Apparel categories list should not be empty");
        apparelCategories.forEach(apparelCategory ->
                assertTrue(apparelCategory.getGenderCategories().stream().anyMatch(genderCategory ->
                        genderCategory.getId() == 1), "we should have apparel categories with gender_category id equals to 1"));

    }

    @Test
    @DataSet("apparel_category.yml")
    @DisplayName("Test findByBrandCategoryIdAndGenderCategoryId")
    @Transactional
    void findByBrandCategoryIdAndGenderCategoryIdSuccess() {
        List<ApparelCategory> apparelCategories = repository.findByBrandCategoryIdAndGenderCategoryIdAndProductsIsNotNull(1, 2);

        assertFalse(apparelCategories.isEmpty(), "Apparel categories list should not be empty");

        apparelCategories.forEach(apparelCategory ->
                assertTrue(apparelCategory.getBrandCategories().stream().anyMatch(brandCategory ->
                        brandCategory.getId() == 1), "we should have apparel categories with brand_category id equals to 1"));

        apparelCategories.forEach(apparelCategory ->
                assertTrue(apparelCategory.getGenderCategories().stream().anyMatch(genderCategory ->
                        genderCategory.getId() == 2), "we should have apparel categories with gender_category id equals to 2"));


    }



}
