package com.ecommerce.springbootecommerce.service.Impl;

import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.ecommerce.springbootecommerce.repository.UserRepository;
import com.ecommerce.springbootecommerce.security.UserPrincipalServiceImpl;
import com.ecommerce.springbootecommerce.service.Interfaces.CheckoutService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    UserPrincipalServiceImpl userPrincipalService;
    @Autowired
    private ModelMapper modelMapper;

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

    public CheckoutServiceImpl(UserRepository userRepository, @Value("${stripe.key.secret}") String secretKey) {
        this.userRepository = userRepository;
        Stripe.apiKey = secretKey;
    }



}

