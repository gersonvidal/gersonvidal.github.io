import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css',
})
export class LanguagesComponent {
  languages: Array<any> = [];
  ngOnInit(): void {
    let language1 = 'Español';
    let language2 = 'Ingles';
    let language3 = 'Japones';

    this.languages.push(language1);
    this.languages.push(language2);
    this.languages.push(language3);
    console.log(this.languages);
  }
}
