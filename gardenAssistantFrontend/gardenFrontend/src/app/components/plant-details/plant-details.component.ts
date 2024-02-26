import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserPlantService} from "../../services/user-plant.service";
import {UserPlant} from "../../models/userPlant";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-plant-details',
  standalone: true,
  imports: [
      MatProgressBarModule,
      NgIf,
      ReactiveFormsModule,

  ],
  templateUrl: './plant-details.component.html',
  styleUrl: './plant-details.component.css'
})
export class PlantDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userPlantService = inject(UserPlantService);
  userPlant: UserPlant | undefined;
  router = inject(Router);

  showEditWindow : Boolean = false; // flag to control open/close of the pop up window

  plantId:string = '';

  updateForm = new FormGroup({
    name: new FormControl(''),
    imgUrl: new FormControl(''),
    sunlight: new FormControl(0),
    water: new FormControl(0),
    health: new FormControl(0),
    careNote: new FormControl('')

  })

  public openEditWindow(){
    this.showEditWindow = true;
  }

  public closeEditWindow(){
    this.showEditWindow = false;
  }

  constructor(){
    this.plantId = this.route.snapshot.params['id'];
    this.userPlantService.getPlantByPlantId(this.plantId).then((userPlant: UserPlant) => {
      this.userPlant = userPlant;

      this.updateForm.patchValue({
        name: this.userPlant?.name,
        imgUrl: this.userPlant?.imgUrl,
        sunlight: this.userPlant?.careRequirement?.sunlight,
        water: this.userPlant?.careRequirement?.water,
        health: this.userPlant?.careRequirement?.health,
        careNote: this.userPlant?.careNote
      });

    });


  }

  async submitUpdateForm(){
    if (this.userPlant?.plantId) {
      const updateSuccess = await this.userPlantService.updatePlantByPlantId(
          this.userPlant.plantId ?? '',
          this.updateForm.value.name ?? '',
          this.updateForm.value.imgUrl ?? '',
          this.updateForm.value.water ?? 0,
          this.updateForm.value.sunlight ?? 0,
          this.updateForm.value.health ?? 0,
          this.updateForm.value.careNote ?? '',
      );

      if (updateSuccess) {
        await this.router.navigate(['user/plantDiary']);
      }
      else{
        alert("Please try again later");
      }
    }
    else {
        alert("Please try again later");
      }
    }



}
