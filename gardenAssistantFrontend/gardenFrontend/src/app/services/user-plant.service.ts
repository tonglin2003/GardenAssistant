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
  async getPlantsByUserId(): Promise<UserPlant[]> {
    const url = `${this.apiUrl}/userPlant/find/user/${this.authenticationService.getUserId()}`;

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
      return data as UserPlant[];
    } catch(error){
      console.error(`Error: `, error);
      throw error;
    }
  }

  async getPlantByPlantId(plantId : string): Promise<UserPlant> {
    const url = `${this.apiUrl}/userPlant/find/${plantId}`;

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
      return data as UserPlant;

    } catch(error){
      console.error(`Error: `, error);
      throw error;
    }
  }

  async updatePlantByPlantId(plantId: string, name: string, imgUrl: string, water: number, sunlight: number, health: number, careNote: string): Promise<UserPlant>{
    const url = `${this.apiUrl}/userPlant/update`;

    const updatePlant = {
      plantId: plantId,
      name: name,
      imgUrl: imgUrl,
      careRequirement: {
        health: health,
        water: water,
        sunlight: sunlight
      },
      careNote: careNote,
      userId: this.authenticationService.getUserId()
    }

    try{
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${this.authenticationService.getTokenCookie()}`
        },
        body: JSON.stringify(updatePlant)
      });

      if (!response.ok){ throw new Error(`HTTP error! Status: ${response.status}`); }

      const data = await response.json();
      return data as UserPlant;

    }catch(error){
      console.error("Error: ", error);
      throw error;
    }

  }

  async addNewPlant(name: string, imgUrl: string, water: number, sunlight: number, health: number, careNote: string): Promise<UserPlant>{
    const url = `${this.apiUrl}/userPlant/add`;

    const newPlant = {
      name: name,
      imgUrl: imgUrl,
      careRequirement: {
        health: health,
        water: water,
        sunlight: sunlight
      },
      careNote: careNote,
      userId: this.authenticationService.getUserId()
    }

    try{
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${this.authenticationService.getTokenCookie()}`
        },
        body: JSON.stringify(newPlant)
      });

      if (!response.ok){ throw new Error(`HTTP error! Status: ${response.status}`); }

      const data = await response.json();
      return data as UserPlant;

    }catch(error){
      console.error("Error: ", error);
      throw error;
    }

  }



  constructor() {}

}
