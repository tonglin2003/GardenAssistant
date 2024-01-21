import {Component, inject} from '@angular/core';
import {InputClickEffectDirective} from "../input-click-effect.directive";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
// import {AuthService} from "../../../services/auth.service";
import {AuthenticationService} from "../../../services/authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputClickEffectDirective,
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  template: `
    <div class="loginBackground">
      <div class="authContainer">
        <div class="loginContainer d-flex flex-column justify-content-center align-items-center">

          <form class="text-center" [formGroup]="loginForm" (submit)="submitApplication()">
            <div class="mb-4">
              <h1 >Login</h1>
              <hr>
            </div>

            <input type="email" placeholder="Account" class="inputBox my-3" formControlName="account" appInputClickEffect required>
            <input type="password" placeholder="Password" class="inputBox my-3" formControlName="password" appInputClickEffect required>
            <button type="submit" class="authButton my-3">Login</button>
          </form>

          <p *ngIf="loginErrorMessage">
            {{loginErrorMessage}}
          </p>

          <p class="mt-3">
            Don't have an account? <a [routerLink]="['/signup']">Sign up</a> here
          </p>
        </div>
      </div>
    </div>

  `,
  styleUrl: '../authPage.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    account: new FormControl(''),
    password: new FormControl('')
  });
  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  loginErrorMessage: string | null = null;

  constructor() {}

  async submitApplication(){
    const loginSuccess = await this.authenticationService.submitLogin(
        this.loginForm.value.account ?? '',
        this.loginForm.value.password ?? ''
    );

    if (loginSuccess){ // if user logged in successfully, then navigate to home page and reload the page to let certain elements exist
      await this.router.navigate(['/']);
      // @ts-ignore
      location.reload();
    }
    else{
        this.loginErrorMessage = "Please check your account and password";
    }
  }

}
