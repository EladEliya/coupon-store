import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(email: string, password: string, clientType:string) {
    console.log(clientType);
    
    let subscription = this.loginService.login(email, password, clientType).subscribe({

        next: (token) => {
            // save the token in browser's session storage
            sessionStorage.setItem('token', token.toString());
            // navigate to welcome/home
            this.router.navigate(["welcome/"+clientType]);
        },
        error: (e) => {
            console.dir(e);
            let errJson = e.error;
            let errObj = JSON.parse(errJson);
            console.dir(errObj);
            let errMsg = errObj.message;
            alert(errMsg);
        },
        complete: () => {
            subscription.unsubscribe();
        }
    });
}

}
