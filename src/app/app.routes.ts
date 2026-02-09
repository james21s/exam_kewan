import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Profile } from './comps/profile/profile';
import { Register } from './comps/register/register';

export const routes: Routes = [
    {
        path:'home',
        component: Home
    },
    {
        path:'profile',
        component: Profile
    },
    {
        path:'register',
        component: Register
    }

];
