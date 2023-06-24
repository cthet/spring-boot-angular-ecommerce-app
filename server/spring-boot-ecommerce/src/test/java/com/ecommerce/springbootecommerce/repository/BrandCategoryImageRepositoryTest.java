package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.BrandCategoryImage;
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

import javax.sql.DataSource;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@ExtendWith({DBUnitExtension.class, SpringExtension.class})
@SpringBootTest
@ActiveProfiles("test")
public class BrandCategoryImageRepositoryTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private BrandCategoryImageRepository repository;

    public ConnectionHolder getConnectionHolder() {
        return () -> dataSource.getConnection();
    }

    @Test
    @DataSet("brand_image.yml")
    @DisplayName("Test findByBrandCategoryIdAndGenderCategoryId")
    void testFindByBrandCategoryIdAndGenderCategoryIdSuccess() {
        Optional<BrandCategoryImage> optionalBrandCategoryImage = repository.findByBrandCategoryIdAndGenderCategoryId(1, 2);

        assertFalse(optionalBrandCategoryImage.isEmpty(), "optionalBrandCategoryImage should not be empty");
        assertEquals(1, optionalBrandCategoryImage.get().getBrandCategory().getId(), "brand category id should be 1");
        assertEquals(2, optionalBrandCategoryImage.get().getGenderCategory().getId(), "gender category id should be 2");

    }

}
