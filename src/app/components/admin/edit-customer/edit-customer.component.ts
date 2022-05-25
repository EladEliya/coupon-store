import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public customer:Customer = new Customer();
  public readOnly:boolean = true;

  constructor(

    private activatedRout: ActivatedRoute, 
    private adminService: AdminService,
    private router:Router

  ) { }
  public update(){
    console.log(this.customer);
    
    let subscription = this.adminService.updateCustomer(this.customer).subscribe({
        next:()=>{
            alert("updated");
        },
        error:(e)=>{
            alert(e.error.message)
        },
        complete:()=>{
            subscription.unsubscribe();
        }
    });
}

public delete() {
    if(!confirm("are you sure?")){
        return;
    }

    // let choice = prompt("delete ?" + this.custome.name + "y/n");
    // if (choice != 'y') {
    //     return;
    // }

    // procedd to delete
    let subscription = this.adminService.deleteOneCustomer(this.customer.id).subscribe({
        next:()=>{
            this.router.navigate(["/welcome/ADMINISTRATOR/customers-details"])
        },
        error:(e)=>{
            alert(e.error.message);
        },
        complete:()=>{
            subscription.unsubscribe
        }
    });
}

  ngOnInit(): void {
    let customerId = this.activatedRout.snapshot.params['id'];
    let subscription = this.adminService.getOneCustomer(customerId).subscribe({
        next: (customerFromServer) => {
            this.customer = customerFromServer;
        },
        error: (e) => {
            alert(e.error.message)
        },
        complete: () => {
            subscription.unsubscribe();
        }
    });

  }

}
