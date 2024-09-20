import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Array<any> = [];
  ngOnInit(): void {
    let skill1 = {
      habilidad: 'Resiliencia',
      nivel: 4,
    };

    let skill2 = {
      habilidad: 'Comunicacion Verbal y Escrita',
      nivel: 3,
    };

    let skill3 = {
      habilidad: 'Resolucion de Problemas',
      nivel: 4,
    };

    let skill4 = {
      habilidad: 'Adaptabilidad',
      nivel: 3,
    };

    let skill5 = {
      habilidad: 'Pensamiento Critico y Analitico',
      nivel: 4,
    };

    let skill6 = {
      habilidad: 'Enfoque en la mejora continua',
      nivel: 4,
    };

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    console.log(this.skills);
  }
}
