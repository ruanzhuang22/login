import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogged } from 'src/app/helpers/userlogged';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    
    let userLogged: UserLogged = new UserLogged();
    if (userLogged.isLogged()) {
        return true;
    }
    // Not authenticated, send to login
    // this.router.navigate(['home'], {queryParams: {return: state.url === '/home' ? undefined : state.url}});
    return false;
}



  
}
