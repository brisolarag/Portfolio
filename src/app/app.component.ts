import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarappComponent } from './components/navbarapp/navbarapp.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

import { CommonModule } from '@angular/common';  
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarappComponent, AboutpageComponent, ProjectspageComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}

