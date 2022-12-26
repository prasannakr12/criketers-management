import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRoute, Resolve, Route, UrlSegment, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<UsersComponent> {
  userService: any;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UsersComponent | Observable<UsersComponent> | Promise<UsersComponent> {
    return this.userService.getAllUsers;
  }

}