import {Component, Input} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantGallery} from "../../../models/plantGallery";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-plant-gallery-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    NgIf
  ],
  template: `
    <div class="item plantCardImg">
      <div class="d-flex flex-column">
        <div class="plantCardText">
          {{ plantInfo.common_name }}
        </div>

        <img *ngIf="plantInfo.default_image" src="{{ plantInfo.default_image.original_url }}" alt="Plant Image">

        <div class="plantCardText">
          <div class="plantCardSubText">
            <div *ngIf="plantInfo.cycle">
              Life Cycle: {{ plantInfo.cycle }}
            </div>
            <div *ngIf="plantInfo.watering">
              Watering: {{ plantInfo.watering }}
            </div>
          </div>
        </div>

      </div>

    </div>
  `,
  styleUrl: './plant-gallery-card.component.css'
})
export class PlantGalleryCardComponent {
  @Input() plantInfo!: PlantGallery;

}
