import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company: Company = new Company();

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  public addCompany(){
    console.log(this.company);
    let subscription = this.adminService.addCompany(this.company).subscribe({
        next:(id)=>{
            console.log("add company: " + id);
            alert("company added: " + id); // popup sucess
        },
        error:(e)=>{
            console.dir(e);
            alert(e.error.message); // popup error
        },
        complete:()=>{
            subscription.unsubscribe();
        }
    });
    
}

public disp(info:any){
  console.dir(info);
}

}
