import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {

  constructor(private languageService: LanguageService) {}


  get contactTitle(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Send me a message:' : 'Envie uma mensagem para mim:';
  }



  get nameLabel(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Full name:' : 'Nome completo:';
  }
  get namePlaceHolder(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'James Smith' : 'José Silva';
  }

  get emailPlaceHolder(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'james.smith@gmail.com' : 'jose.silva@gmail.com';
  }

  get messageLabel(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? 'Message:' : 'Mensagem:';
  }
  get messagePlaceHolder(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? "Hi, and I'm reaching out to you with this message to..." : 'Olá, estou te enviando esta mensagem para...';
  }
  
  get btnSend(): string {
    return this.languageService.getCurrentLanguage() === 'en-us' ? "Disable for now" : 'Desabilitado no momento';
  }



}
