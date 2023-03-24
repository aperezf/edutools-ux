import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import { AuthActions } from "../actions";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";

export const login$ = createEffect(
    (actions$ = inject(Actions), authService = inject(AuthService), router = inject(Router)) => {
        return actions$.pipe(
            ofType(AuthActions.login),
            switchMap((val) => {
                console.log('haciendo login', val);
                return authService.login(val).pipe(
                    
                    map((res: any) => {
                        return AuthActions.loginSuccess(res)
                    }),
                    tap((res) => {
                        router.navigate(['/app'])
                    }),
                    catchError((error) => of(AuthActions.loginFailure({ error: 'Error en login' }))),
                    // tap((res) => {
                    //     router.navigate(['/app'])
                    // })
                )
            })
        )
    },
    { functional: true }
);