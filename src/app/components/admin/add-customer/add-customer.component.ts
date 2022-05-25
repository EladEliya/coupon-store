import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer.model';

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer: Customer= new Customer();

  constructor(
 private amdinService:AdminService,

  ) { }


  ngOnInit(): void {
  }

  public addCustomer(){
    console.log(this.customer);
    let subscription = this.amdinService.addCustomer(this.customer).subscribe({
      next: (id)=>{
        console.log("add customer: "+ id);
        alert("cystomer added: "+ id);
    
      },
      error:(e)=>{
        console.dir(e);
        alert(e.error.message);
      },
      complete:()=>{
        subscription.unsubscribe();
      }


    });
    
  }

}
