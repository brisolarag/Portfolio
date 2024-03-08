import { Routes, withViewTransitions } from '@angular/router';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SocialnetworksComponent } from './pages/socialnetworks/socialnetworks.component';

export const routes: Routes = [
    { path: 'home', component: AboutpageComponent },
    { path: 'projects', component: ProjectspageComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'socials', component: SocialnetworksComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
