import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthReducer } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup

  constructor(
    private store: Store<AuthReducer.State>
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('aperezf91@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('12345', [Validators.required])
    });
  }

  login(): void {
    let formValue = this.loginForm.value
    this.store.dispatch(AuthActions.login(formValue));
  }
}
