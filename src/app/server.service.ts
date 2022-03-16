import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/db";

  httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})};
  
  getDb():Observable<Object>{
    return this.http.get<Object>(this.url);
  }
  
}
