import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate():boolean{     // at first set canActivate():boolean
    const token= localStorage.getItem('token')  // 2nd line
    if(!token){
      alert("please login our site")
      return false
    }
    else{
     return true
    }  // at last go to app-routing.module.ts file

  }
   
  
}
