import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Response,  RequestOptions } from '@angular/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { User } from '../models/user';
import { loginResponse } from '../models/login-response';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:8080';
  private headers: Headers = new Headers({'Content-Type': 'application/json','responseType':'application/json;charset=UTF-8'});
  httpdata:Response;
  constructor(private http: Http) {}
  ngOnInit() {
    
 }
 
  login(user: User): Observable<loginResponse[]> {
    let url: string = `${this.BASE_URL}/login`;
     return this.http.post(url, user,{headers: this.headers},)
     .map(response=>{console.log(response);
    return <loginResponse[]>response.json()}
    ).catch((error:any) => Observable.throw(error.json() || 'Server error'));
    
  }
  
  register(user: User): Observable<loginResponse[]> {
    let url: string = `${this.BASE_URL}/register`;
     return this.http.post(url, user,{headers: this.headers},)
     .map(response=>{console.log(response);
    return <loginResponse[]>response.json()}
    ).catch((error:any) => Observable.throw(error.json() || 'Server error'));
    
  }
}