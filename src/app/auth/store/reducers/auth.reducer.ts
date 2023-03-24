import { Action, createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions";

export interface State {
    isAuthenticated: boolean;
    error: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    error: null
}

const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => ({ ...state })),
    on(AuthActions.loginSuccess, (state) => ({ ...state, isAuthenticated: true })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
);

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}