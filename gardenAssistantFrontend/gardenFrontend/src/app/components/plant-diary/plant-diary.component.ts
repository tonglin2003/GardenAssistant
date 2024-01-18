import {Component, ViewEncapsulation} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantDiaryCardComponent} from "./plant-diary-card/plant-diary-card.component";

@Component({
  selector: 'app-plant-diary',
  standalone: true,
  imports: [
    MatProgressBarModule,
    PlantDiaryCardComponent
  ],
  templateUrl: './plant-diary.component.html',
  styleUrl: './plant-diary.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class PlantDiaryComponent {

}
