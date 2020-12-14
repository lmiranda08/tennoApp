import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthService
    ) { }

  async canActivate(): Promise<boolean | UrlTree> {
  console.log('AuthStateGuard has run');
  // Call isLoggedIn method and await result.
  // If false allow navigation to login page, else navigate to dash
  if (! await this.auth.isLoggedIn()) { return true; }
    return this.router.navigate(['menu/home']);
  }
}
