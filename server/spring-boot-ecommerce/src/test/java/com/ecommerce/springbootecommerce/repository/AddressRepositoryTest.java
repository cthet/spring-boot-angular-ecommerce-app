package com.ecommerce.springbootecommerce.repository;

import com.ecommerce.springbootecommerce.domain.Address;
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
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.springframework.test.util.AssertionErrors.assertTrue;

@ExtendWith({DBUnitExtension.class, SpringExtension.class})
@SpringBootTest
@ActiveProfiles("test")
public class AddressRepositoryTest {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private AddressRepository repository;

    public ConnectionHolder getConnectionHolder() {
        return () -> dataSource.getConnection();
    }


    @Test
    @DataSet("address.yml")
    @DisplayName("Test findById")
    void testFindByIdSuccess() {
        Optional<Address> address = repository.findById(1L);

        assertTrue("Address with ID 1 should be found", address.isPresent());

        Address _address = address.get();
        assertEquals(1L, _address.getId());
    }


    @Test
    @DataSet("address.yml")
    @DisplayName("Test findById - Empty")
    void testFindByIdEmpty() {
        Optional<Address> address = repository.findById(3L);

        assertFalse(address.isPresent());
    }

    @Test
    @DataSet("address.yml")
    @DisplayName("Test findByUserId")
    void testFindByUserIdSuccess() {
        List<Address> addresses = repository.findByUserId(1L);

        assertFalse(addresses.isEmpty(), "list should not be empty");

        addresses.forEach(address -> assertEquals(1L, address.getUser().getId()));
    }

    @Test
    @DataSet("address.yml")
    @DisplayName("Test findByUserId - Empty")
    void testFindByUserIdEmpty() {
        List<Address> addresses = repository.findByUserId(3L);

        assertTrue("list should be empty", addresses.isEmpty());

    }
}
