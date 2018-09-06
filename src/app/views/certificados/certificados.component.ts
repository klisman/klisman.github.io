import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../assets/fade-in-animation';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CertificadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
