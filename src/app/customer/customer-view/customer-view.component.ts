import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { selectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.scss'
})
export class CustomerViewComponent implements OnInit{

  customers$ : Observable<Customer[]> | undefined;

  constructor(private store: Store){
    this.customers$ = this.store.pipe(select(selectCustomers))
  }

  ngOnInit(): void {
    
  }

}
