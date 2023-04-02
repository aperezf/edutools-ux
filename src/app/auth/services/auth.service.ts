import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthReducer } from '../store/reducers';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from '../../store/index';
import { selectIsAuthenticated } from '../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated).pipe(tap(x => console.log(x)));
  }

  login(login: ({ email: string, password: string })): Observable<any> {
    return of({at: 'qwe', rt: 'asd', t: 'bearer'});
  }
}
