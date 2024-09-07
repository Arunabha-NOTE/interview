import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SubmittedComponent} from "./pages/submitted/submitted.component";

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'submitted',
        title: 'Submitted',
        component: SubmittedComponent
    }
];
