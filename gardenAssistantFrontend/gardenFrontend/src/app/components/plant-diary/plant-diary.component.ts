import {Component, inject, ViewEncapsulation} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantDiaryCardComponent} from "./plant-diary-card/plant-diary-card.component";
import {UserPlantService} from "../../services/user-plant.service";
import {UserPlant} from "../../models/userPlant";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plant-diary',
  standalone: true,
  imports: [
    MatProgressBarModule,
    PlantDiaryCardComponent,
    NgForOf,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './plant-diary.component.html',
  styleUrl: './plant-diary.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class PlantDiaryComponent {
  userPlantService = inject(UserPlantService);
  plantList: UserPlant[] | undefined;
  router =  inject(Router);

  showAddWindow: Boolean = false; // the control flag for open/close the add plant pop up window
  public openAddWindow(){
    this.showAddWindow = true;
  }

  public closeAddWindow(){
    this.showAddWindow = false;
  }

  // The form for the request of ADD new plant to the plant diary
  addPlantForm = new FormGroup({
    name: new FormControl(''),
    imgUrl: new FormControl(''),
    sunlight: new FormControl(0),
    water: new FormControl(0),
    health: new FormControl(0),
    careNote: new FormControl('')
  })

  constructor() {
    // Fetch all the user's plants from the DB
    this.userPlantService.getPlantsByUserId().then((plantList: UserPlant[]) => {
      this.plantList = plantList;
    })
  }

  // async function to trigger POST request to the backend
  async submitAddForm() {
    const addSuccess = await this.userPlantService.addNewPlant(
      this.addPlantForm.value.name ?? '',
      this.addPlantForm.value.imgUrl ?? '',
      this.addPlantForm.value.water ?? 0,
      this.addPlantForm.value.sunlight ?? 0,
      this.addPlantForm.value.health ?? 0,
      this.addPlantForm.value.careNote ?? '',
    )
    if (addSuccess) {
      location.reload();
    } else {
      alert("Please try again later");
    }
  }

}



