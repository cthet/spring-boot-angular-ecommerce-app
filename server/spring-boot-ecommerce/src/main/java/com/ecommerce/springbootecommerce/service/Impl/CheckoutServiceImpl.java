package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserDetailsServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.CheckoutService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    UserDetailsServiceImpl userPrincipalService;

    @Value("${stripe.key.secret}")
    private String secretKey;

    @Override
    public PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException {

        Stripe.apiKey = secretKey;

        PaymentIntentCreateParams params =
                PaymentIntentCreateParams
                        .builder()
                        .setAmount(paymentInfo.getAmount())
                        .setCurrency(paymentInfo.getCurrency())
                        .addPaymentMethodType("card")
                        .build();

        return PaymentIntent.create(params);
    }
}

