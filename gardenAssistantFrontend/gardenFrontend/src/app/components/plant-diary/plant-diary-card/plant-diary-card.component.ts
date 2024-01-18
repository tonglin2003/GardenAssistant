import { Component } from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-plant-diary-card',
  standalone: true,
  imports: [
    MatProgressBarModule
  ],
  template:
  `
    <div class="plantDiaryCard d-flex mx-5">
      <div class="plantDiaryImgContainer">
        <img src="https://files.cults3d.com/uploaders/18350910/illustration-file/c54e741e-99a4-40e1-9b57-00a219623478/untitled1.png">
      </div>

      <div class="w-100">
        <div class="plantStatus">
          Health: <mat-progress-bar mode="determinate" value="75" class="healthProgressBar"></mat-progress-bar>
        </div>


        <div class="plantStatus">
          Current Water: <mat-progress-bar mode="determinate" value="75" class="waterProgressBar"></mat-progress-bar>
        </div>

        <div class="plantStatus">
          Current Sunlight: <mat-progress-bar mode="determinate" value="75" class="sunlightProgressBar"></mat-progress-bar>
        </div>

        <div class="plantStatus d-flex">
          Care Note:
          <div class="plantCareNote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
          </div>
        </div>

      </div>

    </div>

  `,
  styleUrl: './plant-diary-card.component.css'
})
export class PlantDiaryCardComponent {

}
