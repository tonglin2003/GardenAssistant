import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import {PlantGalleryComponent} from "./components/plant-gallery/plant-gallery.component";
import {PlantDiaryComponent} from "./components/plant-diary/plant-diary.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {AuthGuardService} from "./auth-guard.service";

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
    },
    {
        path: 'user/plantDiary',
        component: PlantDiaryComponent,
        title: "Plant Diary",
        canActivate: [AuthGuardService]

    },
    {
        path:'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path:'signup',
        component: SignupComponent,
        title: 'Sign Up'
    }

];

export default routeConfig;
