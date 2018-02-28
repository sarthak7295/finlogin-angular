import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { loginResponse } from '../../models/login-response'
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  myResponse:loginResponse[]
  constructor(private auth: AuthService) {}
  onRegister(): void {
    
    this.auth.register(this.user)
    .subscribe(response=>this.myResponse=response,
      myerror=>console.log("Error : = "+myerror)
    );
  }
}