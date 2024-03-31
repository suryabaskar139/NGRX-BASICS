import { createReducer, on } from '@ngrx/store';
import { Customer } from '../../../models/customer';
import * as CustomerActions from '../action/customer.actions'

export const customerFeatureKey = 'customer';

export interface CustomerState {

  customers : Customer[];

}

export const initialState: CustomerState = {
  customers : []
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers, (state:CustomerState,{customer}) => ({
    ...state,
    customers:[...state.customers,customer]
  }

  ))
);

