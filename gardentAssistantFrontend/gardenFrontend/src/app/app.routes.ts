import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home"
    },
    {
        path: 'plant/:id',
        component: PlantDetailsComponent,
        title: "Plant"
    }
    
];

export default routeConfig;