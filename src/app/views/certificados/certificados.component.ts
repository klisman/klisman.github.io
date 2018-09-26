import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../assets/fade-in-animation';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CertificadosComponent implements OnInit {

  certificados = [
    {
      titulo: 'Angular JS',
      descricao: 'Desenvolvimento de Aplicações Web com AngularJS.',
      imagem: '../../../assets/images/angularjs-mvc.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Angular 2',
      descricao: 'Curso Angular 2: webapps ainda mais poderosas.',
      imagem: '../../../assets/images/angular2-parte1.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Javascript ES6',
      descricao: 'Curso JavaScript avançado I: ES6, orientação a objetos e padrões de projetos.',
      imagem: '../../../assets/images/javascript-es6.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Java Persistence API',
      descricao: 'Curso Java e JPA: Persistência de objetos com a JPA2 e Hibernate.',
      imagem: '../../../assets/images/jpa.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Curso Android I',
      descricao: 'Aplicações Android com Android Studio.',
      imagem: '../../../assets/images/android-studio.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Ionic 2',
      descricao: 'Aplicações híbricas mobile com Ionic 2.',
      imagem: '../../../assets/images/ionic2-parte2.svg',
      instituicao: 'Alura Cursos Online'
    },
    {
      titulo: 'Spring MVC',
      descricao: 'Aplicações web com Spring MVC.',
      imagem: '../../../assets/images/spring-mvc.svg',
      instituicao: 'Alura Cursos Online'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
