import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public companies! :Company[];
  private subscription!: Subscription; 

  date = new Date();
  

  constructor(
    private titleService:Title,
    private adminService: AdminService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Companies");
    // this.products = this.productService.getAllProducts();

    // 1. create a subscriber object to define what to do with results
    let subscriber: Partial<Observer<Company[]>> = {
        next:(arr)=>{
            this.companies = arr;
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
    let observable: Observable<Company[]> = this.adminService.getAllCompanies();
    
    // 3. subscribe will start the asynchronius request of data
    this.subscription = observable.subscribe(subscriber);
    console.log("subscribed");


  }


}
