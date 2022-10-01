package com.ecommerce.springbootecommerce.controller;

//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/order")
//public class CheckoutController {
//    @Autowired
//    CheckoutService checkoutService;
//    @PostMapping("/register")
//    public ResponseEntity<MessageResponse> saveOrder(@Valid @RequestBody OrderRequest orderRequest) {
//        try {
//
//            return new ResponseEntity<>(new MessageResponse(checkoutService.saveOrder(orderRequest)), HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping("/payment-intent")
//    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfo paymentInfo) {
//
//        try {
//            PaymentIntent paymentIntent = checkoutService.createPaymentIntent(paymentInfo);
//
//            String paymentStr = paymentIntent.toJson();
//
//            return new ResponseEntity<>(paymentStr, HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
