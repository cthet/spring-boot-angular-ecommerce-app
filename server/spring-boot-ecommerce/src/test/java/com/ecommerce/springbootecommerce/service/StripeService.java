package com.ecommerce.springbootecommerce.service;

import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;

public class StripeService {


    public PaymentIntent create(PaymentIntentCreateParams params) {
        PaymentIntent paymentIntent = new PaymentIntent();
        paymentIntent.setAmount(params.getAmount());
        paymentIntent.setCurrency(params.getCurrency());

        return paymentIntent;
    }
}
