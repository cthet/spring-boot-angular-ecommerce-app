import { createAction, props } from "@ngrx/store";
import { PaymentInfo } from "src/app/models/Payment-info";

export const setPaymentInfo = createAction('[Checkout Page Component] Set PaymentInfo');

export const setPaymentInfoSuccess = createAction('[Checkout Page Component] Set PaymentInfo Success',
props<{ paymentInfo: PaymentInfo }>());


export const createPaymentIntent = createAction('[Checkout Page Component] Create Payment Intent', props<{ stripe: any, card: any }>());

export const createPaymentIntentSuccess = createAction('[Checkout Page Component] Create Payment Intent Success',
props<{ paymentIntentResponse: any, stripe: any, card: any }>());

export const createPaymentIntentFailure = createAction('[Checkout Page Component] Create Payment Intent Failure',
props<{ error: string }>());