import {
  ActivatedRouteSnapshot, GuardResult, MaybeAsync,
  Router
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: MaybeAsync<GuardResult>) {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}

