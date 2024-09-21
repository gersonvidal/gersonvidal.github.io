import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
})
export class AchievementsComponent {
  achievements: Array<any> = [];
  certificates: Array<any> = [];
  ngOnInit(): void {
    let achievement1 = {
      title:
        'Instructor de Taller: "Taller de Java: Mejora tu Logica de Programacion"',
      year: 2024,
      description:
        'Imparti un taller para jovenes de preparatoria en el que se les enseño un enfoque para resolver problemas y reforzaron lo aprendido con practica',
    };

    let achievement2 = {
      title:
        'Construccion de un modelo de Inteligencia Artificial para predecir una posible enfermedad',
      year: 2024,
      description:
        'Mediante un proceso de construccion de un modelo de aprendizaje de maquina, construi y entrene un modelo de clasificacion que es capaz de predecir una posible enfermedad, usando como datos de entrada 132 posibles sintomas',
    };

    let certificate1 = {
      title:
        'Certificado de "Introducción a Inteligencia Artificial" de EDteam',
    };

    this.achievements.push(achievement1);
    this.achievements.push(achievement2);
    this.certificates.push(certificate1);
    console.log(this.achievements);
    console.log(this.certificates);
  }
}
