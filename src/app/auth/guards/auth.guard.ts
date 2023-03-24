import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map } from "rxjs";

export const appGuard = 
  (route: ActivatedRouteSnapshot) => 
    inject(AuthService).isAuthenticated().pipe(
      map(logged => 
        logged ? true : createUrlTreeFromSnapshot(route, ['/', 'auth', 'login'])
      )
    );