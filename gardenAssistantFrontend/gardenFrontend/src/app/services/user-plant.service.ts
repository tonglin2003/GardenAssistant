import {inject, Injectable} from '@angular/core';
import {UserPlant} from "../models/userPlant";
import {environment} from "../../environments/environment";
import {HttpHeaders} from "@angular/common/http";
import {response} from "express";
import {AuthenticationService} from "./authentication.service";
// import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserPlantService {

  private apiUrl = environment.apiBaseUrl;
  authenticationService = inject(AuthenticationService);
  async getPlant(): Promise<UserPlant> {
    const url = `${this.apiUrl}/userPlant/find/659f688ca6563704cf1a69be`;

    try{
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${this.authenticationService.getTokenCookie()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data as UserPlant;
    } catch(error){
      console.error(`Error: `, error);
      throw error;
    }



  }

  constructor() {}

}
