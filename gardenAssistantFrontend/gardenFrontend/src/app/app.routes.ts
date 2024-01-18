import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import {PlantGalleryComponent} from "./components/plant-gallery/plant-gallery.component";


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'plantGallery',
        component: PlantGalleryComponent,
        title: "Plant Gallery"
    }

];

export default routeConfig;
