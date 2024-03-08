import { Component, HostBinding } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  
  
})
export class AboutpageComponent {

  constructor(private languageService: LanguageService) {}


  get welcomeAbout(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Hi, my name is' : 'Bem vindo, me chamo';
  }

  get titleAbout(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? '.NET Developer' : 'Desenvolvedor .NET';
  }

  get descAbout(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? "I'm a technology enthusiast and a future Software Engineer. On this page, you can get to know me a little better and follow my projects." : 'Sou um amante de tecnologia e futuro Engenheiro de Software. Nesta página você consegue me conhecer um pouco melhor, como acompanhar meus projetos.';
  }

  get moreAbout(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? " Find out more about me using the menus above!" : ' Saiba um pouco mais sobre mim usando os menus acima!';
  }

  get regionAbout(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? "Brazil, Porto Alegre, RS" : 'Brasil, Porto Alegre, RS';
  }


  changeLanguage(lang: string) {
    this.languageService.setCurrentLanguage(lang);
  }
}
