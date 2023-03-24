import { createSelector } from '@ngrx/store';
import { AppState } from '../../../store/index';
import { AuthReducer } from '../reducers';


const selectAuth = (state: AppState) => state.auth;

export const selectIsAuthenticated = createSelector(
    selectAuth,
    (state: AuthReducer.State) => state.isAuthenticated
);