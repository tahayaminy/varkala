import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from 'src/assets/server/models/User';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  url="http://localhost:3000";
  httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http:HttpClient) { }
    
  getDb():Observable<Object>{
    return this.http.get<Object>(this.url+'/db');
  };  
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.url+'/users' , user , this.httpOptions);    
  }
  
}
