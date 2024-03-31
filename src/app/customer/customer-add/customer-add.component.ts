import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/reducer/customer.reducer';
import { Customer } from '../../models/customer';
import { addCustomers } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent implements OnInit{

  constructor(private store:Store<CustomerState>){}

  ngOnInit(): void {
    
  }

  addCustomer(name :any){
    const customer = new Customer();
    customer.name = name;
    this.store.dispatch(addCustomers(customer));
  }

}
