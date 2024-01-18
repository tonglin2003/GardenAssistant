import { Component } from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-plant-gallery-card',
  standalone: true,
  imports: [
    MatProgressBarModule
  ],
  template: `
    <div class="item plantCardImg">
      <div class="d-flex flex-column">
        <div class="plantCardText">
          European Silver Fir
        </div>

        <img src="https://burst.shopifycdn.com/photos/thin-plant-stems-in-sun.jpg?width=1000&format=pjpg&exif=0&iptc=0">

        <div class="plantCardText">
          <div class="plantCardSubText">
            <div>
              Life Cycle: Perennial
            </div>
            <div>
              Watering: <mat-progress-bar mode="determinate" value="75"></mat-progress-bar>
            </div>
          </div>
        </div>

      </div>

    </div>
  `,
  styleUrl: './plant-gallery-card.component.css'
})
export class PlantGalleryCardComponent {

}
