import { Routes } from '@angular/router';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
    {path:'about', component:About},
    {path:'contact-us', component:ContactUs}
];
