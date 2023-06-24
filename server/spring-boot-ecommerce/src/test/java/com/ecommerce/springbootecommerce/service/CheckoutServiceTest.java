package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserDetailsServiceImpl;
import com.ecommerce.springbootecommerce.service.Impl.CheckoutServiceImpl;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CheckoutServiceTest {

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserDetailsServiceImpl userPrincipalService;

    @MockBean
    private StripeService stripeService;

    @Autowired
    private CheckoutServiceImpl checkoutService;

    private PaymentInfo testPaymentInfo;
    private PaymentIntentCreateParams testParams;
    private PaymentIntent testPaymentIntent;


    @BeforeEach
    void setUp() {
        testPaymentInfo = new PaymentInfo();
        testPaymentInfo.setAmount(1000L);
        testPaymentInfo.setCurrency("eur");

        testParams = PaymentIntentCreateParams
                .builder()
                .setAmount(testPaymentInfo.getAmount())
                .setCurrency(testPaymentInfo.getCurrency())
                .addPaymentMethodType("card")
                .build();

        testPaymentIntent = new PaymentIntent();
        testPaymentIntent.setCurrency(testParams.getCurrency());
        testPaymentIntent.setAmount(testParams.getAmount());
        testPaymentIntent.setPaymentMethod(testParams.getPaymentMethod());
    }

    @Test
    @DisplayName("Test createPaymentIntent - Success")
    void TestCreatePaymentIntentSuccess() throws Exception {
        given(stripeService.create(testParams)).willReturn(testPaymentIntent);

        PaymentIntent result = checkoutService.createPaymentIntent(testPaymentInfo);

        assertEquals(testPaymentIntent.getAmount(), result.getAmount());
        assertEquals(testPaymentIntent.getCurrency(), result.getCurrency());
        assertEquals(testPaymentIntent.getPaymentMethod(), result.getPaymentMethod());
    }



}
