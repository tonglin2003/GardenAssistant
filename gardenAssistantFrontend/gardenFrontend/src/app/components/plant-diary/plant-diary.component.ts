import {Component, inject, ViewEncapsulation} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantDiaryCardComponent} from "./plant-diary-card/plant-diary-card.component";
import {UserPlantService} from "../../services/user-plant.service";
import {UserPlant} from "../../models/userPlant";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-plant-diary',
  standalone: true,
  imports: [
    MatProgressBarModule,
    PlantDiaryCardComponent,
    NgForOf
  ],
  templateUrl: './plant-diary.component.html',
  styleUrl: './plant-diary.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class PlantDiaryComponent {
  userPlantService = inject(UserPlantService);
  plantList: UserPlant[] | undefined;

  constructor() {
    this.userPlantService.getPlantsByUserId().then((plantList: UserPlant[]) => {
      this.plantList = plantList;
    })
  }

}
