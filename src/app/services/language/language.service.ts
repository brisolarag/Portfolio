import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'pt-br'; // Idioma padrão

  constructor() {}

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}