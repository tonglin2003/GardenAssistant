import {Component, inject} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PlantGalleryCardComponent} from "./plant-gallery-card/plant-gallery-card.component";
import {PlantGalleryService} from "../../services/plant-gallery.service";
import {PlantGallery} from "../../models/plantGallery";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-plant-gallery',
  standalone: true,
  imports: [
    MatProgressBarModule,
    PlantGalleryCardComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './plant-gallery.component.html',
  styleUrl: './plant-gallery.component.css'
})
export class PlantGalleryComponent {
  plantGalleryService = inject(PlantGalleryService);
  plantGalleryList: PlantGallery[] | undefined;
  page: number = 1;
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  public refreshPage(){
    location.reload();
  }

  async changePage(newPage: number) {
    alert("hello");
    await this.router.navigate(['/plantGallery', newPage]);
    location.reload();
  }


  constructor() {
    this.page = Number(this.route.snapshot.params['page'])
    this.plantGalleryService.getPlantGallery(this.page).then((plantList: PlantGallery[]) =>{
      this.plantGalleryList = plantList;
    });

  }

}
