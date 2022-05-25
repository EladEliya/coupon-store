import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
public company : Company = new Company;
private subscription!: Subscription;
  constructor(
    private companyService: CompanyService,
    private titleService:Title,
    private router: Router
    ) { }

  ngOnInit(): void {

    // let companyId = this.activateRout.snapshot.params['id']
    let subscription = this.companyService.getCompany().subscribe({
        next: (companyFromServer) => {
            this.company = companyFromServer;
        },
        error: (e) => {
            alert(e.error.message)
        },
        complete: () => {
            subscription.unsubscribe();
        }
    });
  }













  //   this.titleService.setTitle("Company");
  //   // this.products = this.productService.getAllProducts();

  //   // 1. create a subscriber object to define what to do with results
  //   let subscriber: Partial<Observer<Company>> = {
  //       next:(com)=>{
  //           this.company=com;
  //       },

  //       complete: ()=>{
  //           this.subscription.unsubscribe();
  //           console.log("unsubscribed");
  //       } ,

  //       error:(e)=>{
  //           console.dir(e);
  //           alert(e.error.message);
  //           this.router.navigate(["/"]);
  //       }
  //   };
    
  //   // 2. get the observable - immediate
  //   let observable: Observable<Company> = this.companyService.getCompany();
    
  //   // 3. subscribe will start the asynchronius request of data
  //   this.subscription = observable.subscribe(subscriber);
  //   console.log("subscribed");


  // }

}
