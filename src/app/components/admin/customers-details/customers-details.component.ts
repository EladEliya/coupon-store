import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {


  public customers! : Customer[];
  private subscription!: Subscription;

  constructor(
    private titleService: Title, 
    private adminService: AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("customers");
    // this.products = this.productService.getAllProducts();

    // 1. create a subscriber object to define what to do with results
    let subscriber: Partial<Observer<Customer[]>> = {
        next:(arr)=>{
            this.customers = arr;
        },

        complete: ()=>{
            this.subscription.unsubscribe();
            console.log("unsubscribed");
        } ,

        error:(e)=>{
            console.dir(e);
            alert(e.error.message);
            this.router.navigate(["/"]);
        }
    };
    
    // 2. get the observable - immediate
    let observable: Observable<Customer[]> = this.adminService.getAllCustomers();
    
    // 3. subscribe will start the asynchronius request of data
    this.subscription = observable.subscribe(subscriber);
    console.log("subscribed");




  }

}
