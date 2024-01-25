import {Component, Input} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {UserPlant} from "../../../models/userPlant";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plant-diary-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    RouterLink
  ],
  template:
  `
    <div class="plantDiaryCard d-flex mx-5">
      <div class="plantDiaryImgContainer">
        <img [src]="userPlant.imgUrl">
      </div>

      <div class="w-100">
        <div class="d-flex justify-content-center mt-3">
          Name: {{userPlant.name}}
        </div>
        <hr class="mb-3">

        <div class="plantStatus">

          Health:
          <mat-progress-bar mode="determinate" [value]="userPlant.careRequirement.health"
                            class="healthProgressBar"></mat-progress-bar>
        </div>


        <div class="plantStatus">
          Current Water:
          <mat-progress-bar mode="determinate" [value]="userPlant.careRequirement.water"
                            class="waterProgressBar"></mat-progress-bar>
        </div>

        <div class="plantStatus">
          Current Sunlight:
          <mat-progress-bar mode="determinate" [value]="userPlant.careRequirement.sunlight"
                            class="sunlightProgressBar"></mat-progress-bar>
        </div>

        <button class="button-89 m-2" style="--color: #363d62;" [routerLink]="['/user/plantDiary', userPlant.plantId]"> More Details</button>


      </div>

    </div>

  `,
  styleUrl: './plant-diary-card.component.css'
})
export class PlantDiaryCardComponent {
  @Input() userPlant!: UserPlant;
}
