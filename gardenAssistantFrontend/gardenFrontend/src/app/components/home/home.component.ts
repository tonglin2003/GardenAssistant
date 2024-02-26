import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserPlant} from "../../models/userPlant";
import {UserPlantService} from "../../services/user-plant.service";
import {AuthGuardService} from "../../auth-guard.service";
// import {AuthService} from "../../services/auth.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  userPlant: UserPlant | undefined;
  userPlantService = inject(UserPlantService);

  authenticationService = inject(AuthenticationService)


  constructor() {


  }



}
