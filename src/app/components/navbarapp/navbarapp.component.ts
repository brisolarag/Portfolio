
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { Router } from '@angular/router';
import { DownloadService } from '../../services/DownloadCV/download-cv.service';

@Component({
  selector: 'app-navbarapp',
  standalone: true,
  imports: [],
  templateUrl: './navbarapp.component.html',
  styleUrl: './navbarapp.component.scss'
})
export class NavbarappComponent {

  constructor(private router: Router, private languageService: LanguageService, private downloadService: DownloadService) {}

  get home(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Home' : 'Início';
  }

  get projects(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Projects' : 'Projetos';
  }

  get contact(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Send a message' : 'Envie uma mensagem';
  }
  get redesSociais(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Social Networks' : 'Redes Sociais';
  }

  get downloadCVLabel(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Download CV' : 'Baixar CV';
  }


  changeLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  navigateToProjects() {
    this.router.navigateByUrl('/projects');
  }
  
  navigateToContact() {
    this.router.navigateByUrl('/contact');
  }
  navigateToSocials() {
    this.router.navigateByUrl('/socials');
  }

  downloadCV() {
    let filename;
    if (this.languageService.getCurrentLanguage() === 'en-us') {
      filename = 'Gabriel_Brisolara_CV_EN.pdf';
    } else {
      filename = 'Gabriel_Brisolara_CV_PTBR.pdf';
    }
    this.downloadService.downloadFile(filename);

  }






}

