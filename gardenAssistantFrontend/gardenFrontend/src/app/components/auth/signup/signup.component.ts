import {Component, inject} from '@angular/core';
import {InputClickEffectDirective} from "../input-click-effect.directive";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputClickEffectDirective,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
  ],
  template: `
    <div class="signupBackground">
      <div class="authContainer">
        <div class="loginContainer d-flex flex-column justify-content-center align-items-center">
          <form class="text-center" [formGroup]="signUpForm" (submit)="submitSignUpForm()">
            <div class="mb-4">
              <h1>Sign Up</h1>
              <hr>
            </div>

            <input type="text" placeholder="Username" class="inputBox my-3" appInputClickEffect required formControlName="username">
            <input type="url" placeholder="Avatar Url" class="inputBox my-3" appInputClickEffect required formControlName="avatarUrl">
            <input type="email" placeholder="Account" class="inputBox my-3" appInputClickEffect required formControlName="account">
            <input type="password" placeholder="Password" class="inputBox my-3" appInputClickEffect required formControlName="password">

            <p *ngIf="signUpErrorMessage">{{signUpErrorMessage}}</p>

            <button type="submit" class="authButton my-3">Sign Up</button>

          </form>

          <p class="mt-3">
            Got an account already? <a [routerLink]="['/login']">Login</a> here
          </p>
        </div>
      </div>
    </div>

  `,
  styleUrl: '../authPage.css'
})
export class SignupComponent {

  authenticationService = inject(AuthenticationService);
  router = inject(Router);


  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    avatarUrl: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public signUpErrorMessage: string | null = null;


  constructor() {}

  async submitSignUpForm(){
    const signupSuccess = await this.authenticationService.submitSignUp(
        this.signUpForm.value.username ?? '',
        this.signUpForm.value.avatarUrl ?? '',
        this.signUpForm.value.account ?? '',
        this.signUpForm.value.password ?? ''
    )

    if (signupSuccess){ // if user logged in successfully, then navigate to home page and reload the page to let certain elements exist
      await this.router.navigate(['/']);
      // @ts-ignore
      location.reload();
    }
    else{
      this.signUpErrorMessage = "Please check your input";
    }
  }

}
