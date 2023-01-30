package com.ecommerce.springbootecommerce.controller;

import com.ecommerce.springbootecommerce.dto.payment.PaymentInfo;
import com.ecommerce.springbootecommerce.service.Interfaces.CheckoutService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfo paymentInfo) throws StripeException {

        try {
            PaymentIntent paymentIntent = checkoutService.createPaymentIntent(paymentInfo);

            String paymentStr = paymentIntent.toJson();

            return new ResponseEntity<>(paymentStr, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
