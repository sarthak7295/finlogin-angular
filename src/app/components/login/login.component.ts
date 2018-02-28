import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  data1;
  constructor(private auth: AuthService) {}
  onLogin(): void {

    this.data1=this.auth.login(this.user)
    
    
    console.log(this.data1);
    
    
    
  }
}