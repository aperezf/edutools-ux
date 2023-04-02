import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Auth] Login',
    props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ at: string, rf: string, t: string}>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);