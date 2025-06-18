import { Routes } from '@angular/router';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';
import { Profile } from './profile/profile';
import { DynamicRoutes } from './dynamic-routes/dynamic-routes';

export const routes: Routes = [
    {path:'about', component:About},
    {path:'contact-us', component:ContactUs},
    {path:'profile', component:Profile},
    { path: 'dynamic-routes/:id/:name', component: DynamicRoutes },
];
