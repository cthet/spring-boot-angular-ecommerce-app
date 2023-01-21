package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
