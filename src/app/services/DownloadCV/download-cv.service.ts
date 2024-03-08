import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  // downloadFile(filename: string) {
  //   const url = `/assets/${filename}`;
  //   window.open(url);
  // }
  downloadFile(filename: string) {
    const url = `/assets/${filename}`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const a = document.createElement('a');
        const objectUrl = window.URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}