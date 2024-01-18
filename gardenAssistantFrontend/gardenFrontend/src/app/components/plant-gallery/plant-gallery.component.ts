import { Component } from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantGalleryCardComponent} from "../plant-gallery-card/plant-gallery-card.component";

@Component({
  selector: 'app-plant-gallery',
  standalone: true,
  imports: [
    MatProgressBarModule,
    PlantGalleryCardComponent
  ],
  templateUrl: './plant-gallery.component.html',
  styleUrl: './plant-gallery.component.css'
})
export class PlantGalleryComponent {

}
