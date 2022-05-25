import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  public company: Company = new Company;
  public readOnly:boolean = true;

  constructor(
    private activateRout: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
    
  ) { }

  public update(){
    console.log(this.company);
    
    let subscription = this.adminService.updateCompany(this.company).subscribe({
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

    // let choice = prompt("delete ?" + this.company.name + "y/n");
    // if (choice != 'y') {
    //     return;
    // }

    // procedd to delete
    let subscription = this.adminService.deleteOneCompany(this.company.id).subscribe({
        next:()=>{
            this.router.navigate(["/welcome/ADMINISTRATOR"])
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
    let companyId = this.activateRout.snapshot.params['id']
    let subscription = this.adminService.getOneCompany(companyId).subscribe({
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

}
