import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
