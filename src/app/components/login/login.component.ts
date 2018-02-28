import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { HttpResponse } from 'selenium-webdriver/http';
import { loginResponse } from '../../models/login-response';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  
  myResponse:loginResponse[]
  constructor(private auth: AuthService) {}
  onLogin(): void {
  
    this.auth.login(this.user)
    .subscribe(response=>this.myResponse=response,
      myerror=>console.log("Error : = "+myerror)
    );
    
    
  }
}