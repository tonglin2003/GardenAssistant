import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlantGalleryService {

  private apiUrl: string = "https://perenual.com/api";
  private apiKey: string = environment.plantApiKey;

  // fetch the list from the api request
  async getPlantGallery(page: number) {
    const url = `${this.apiUrl}/species-list?key=${this.apiKey}&page=${page}`
    try{
      const response = await fetch(url);
      const data = await response.json();
      return data["data"]

    } catch(error){
      console.error(`Error: `, error);
      throw error;
    }
  }

  constructor() { }


}
