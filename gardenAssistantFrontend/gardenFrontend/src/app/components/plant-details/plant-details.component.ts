import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [],
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.css'
})
export class PlantDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  plantId = -1;

  constructor(){
    this.plantId = Number(this.route.snapshot.params['id']);
  }


}
