import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-company',
  templateUrl: './menu-company.component.html',
  styleUrls: ['./menu-company.component.css']
})
export class MenuCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    // remove token from session storage
    sessionStorage.removeItem("token");
    // navigate to login page
    this.router.navigate(["/"]);
}

}
