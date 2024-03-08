import { Component, HostBinding } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-projectspage',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.scss',
})
export class ProjectspageComponent {
  constructor(private languageService: LanguageService, private http: HttpClient) {}

  projects: any[] = [];
  projects2024: any[] = [];
  projects2023: any[] = [];
  projects2022: any[] = [];

  selectedYear: string = 'all';

  url: string = '/assets/jsonProjects/projects.json';



  get projectsTitle(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'See my projects below:' : 'Acompanhe meus projetos abaixo:';
  }

  get allForm(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'All projects' : 'Todos projetos';
  }

  get moreBtn(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? '---' : '---';
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<any[]>(this.url).subscribe((res) => {
      this.projects = res;
      this.updateProjectsByYear();
    });
  }
  
  updateProjectsByYear() {
    this.projects2024 = this.projects.filter((project: { ano: number; }) => project.ano === 2024).reverse();
    this.projects2023 = this.projects.filter((project: { ano: number; }) => project.ano === 2023).reverse();
    this.projects2022 = this.projects.filter((project: { ano: number; }) => project.ano === 2022).reverse();

    this.projects2024.sort((a, b) => b.ano - a.ano);
    this.projects2023.sort((a, b) => b.ano - a.ano);
    this.projects2022.sort((a, b) => b.ano - a.ano);
    this.projects.sort((a, b) => b.ano - a.ano);
  }
  

  isLanguageEnglish(): boolean {
    return this.languageService.getCurrentLanguage() === 'en-us';
  }

  onYearChange(event: any) {
    const selectedValue = event?.target?.value;
    if (selectedValue) {
      if (selectedValue != this.selectedYear) {
        this.loadProjects();
      }
      this.selectedYear = selectedValue;
      console.log('Ano selecionado:', this.selectedYear);
    }
  }

}
