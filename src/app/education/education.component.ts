import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  scholarity: Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      fecha: '2018-2022',
      grado: 'Licenciatura en Ingenieria de Software',
      escuela: 'Universidad Veracruzana',
    };

    let education2 = {
      fecha: '2022-2026',
      grado: 'Maestria en Inteligencia Artificial',
      escuela: 'Universidad Veracruzana',
    };

    this.scholarity.push(education1);
    this.scholarity.push(education2);
    console.log(this.scholarity);
  }
}
