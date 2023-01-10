import { createSelector } from '@ngrx/store';
import * as fromSignup from '../reducers/signup.reducer'
import { selectSignupState } from './login.selectors';

    
export const selectSignupEmail = createSelector(
    selectSignupState,
    fromSignup.getSignupEmail
);
    
export const selectSignupError = createSelector(
    selectSignupState,
    fromSignup.getError
);
    
export const selectSignupStatus = createSelector(
    selectSignupState,
    fromSignup.getStatus
);
    
  