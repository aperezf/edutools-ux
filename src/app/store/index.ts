import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer } from '../auth/store/reducers';

export interface AppState {
    auth: AuthReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: AuthReducer.reducer,
}