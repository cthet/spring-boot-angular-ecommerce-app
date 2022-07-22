package com.ecommerce.springbootecommerce.service.Interfaces;

import com.ecommerce.springbootecommerce.dto.order.OrderRequest;
import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    String  saveOrder(OrderRequest orderRequest);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
