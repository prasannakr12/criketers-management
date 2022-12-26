import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild() {
    if (this.authService.isAdminLoggedIn()) {
      return true;
    } else {
      alert('permission Denied');
      return false;
    }
  }
}
