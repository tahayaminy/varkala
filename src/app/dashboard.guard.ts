import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {
  constructor(private router:Router) {
  }
  profile=sessionStorage.getItem("userId");
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.profile){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
}
