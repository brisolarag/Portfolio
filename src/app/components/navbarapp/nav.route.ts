import { Route } from "@angular/router";
import { AboutpageComponent } from "../../pages/aboutpage/aboutpage.component";
import { ProjectspageComponent } from "../../pages/projectspage/projectspage.component";




export const NAV_ROUTE: Route[] = [
    {path: 'home', component: AboutpageComponent},
    {path: 'projects', component: ProjectspageComponent},
]