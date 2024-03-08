import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

library.add(faWhatsapp);

@Component({
  selector: 'app-socialnetworks',
  standalone: true,
  imports: [HttpClientModule, FontAwesomeModule],
  templateUrl: './socialnetworks.component.html',
  styleUrl: './socialnetworks.component.scss'
})
export class SocialnetworksComponent {
  constructor(private languageService: LanguageService, private http: HttpClient) {}

  sociais: any;


  url: string = '/assets/jsonSocials/socialNetworks.json';

  loadSocials() {
    this.http.get<any[]>(this.url).subscribe((res) => {
      this.sociais = res;
    });
  }

  isLanguageEnglish(): boolean {
    return this.languageService.getCurrentLanguage() === 'en-us';
  }




  get socialsTitle(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'My social networks:' : 'Minhas redes sociais:';
  }



  get emailTitle(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Mail' : 'Email';
  }
  get emailDesc(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Send me emails to my professional email:' : 'Me envie emails para meu email profissional:';
  }
  get email(): string {
    return 'dev.brisolara@gmail.com';
  }


  get githubDesc(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'There are all my project repositories.' : 'Onde todos repósitorios dos projetos estão.';
  }
  
  get whatsDesc(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'To talk directly with me, use this number below:' : 'Para conversar diretamente comigo, o melhor espaço é o whatsapp. Número:';
  }

  get linkedinDesc(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? "Eventually I post about the projects I'm in, and the technologies I'm studying" : 'Eventualmente faço postagens sobre projetos e tecnologias que eu estou estudando.';
  }
}
