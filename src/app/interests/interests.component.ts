import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css',
})
export class InterestsComponent {
  interests: Array<any> = [];
  ngOnInit(): void {
    let interest1 = 'IA';
    let interest2 = 'Aprendizaje de Maquina';
    let interest3 = 'Idiomas';
    let interest4 = 'Fotografia';
    let interest5 = 'Viajes';
    let interest6 = 'Desarrollo Personal';
    let interest7 = 'Boxeo';
    let interest8 = 'Videojuegos';

    this.interests.push(interest1);
    this.interests.push(interest2);
    this.interests.push(interest3);
    this.interests.push(interest4);
    this.interests.push(interest5);
    this.interests.push(interest6);
    this.interests.push(interest7);
    this.interests.push(interest8);
    console.log(this.interests);
  }
}
