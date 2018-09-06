import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../assets/fade-in-animation';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
