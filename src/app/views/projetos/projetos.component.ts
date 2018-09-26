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

  projetos = [
    {
      titulo: 'SIEST - Remuneração de Dirigentes',
      descricao: 'Desenvolvimento do sistema para o controle da Remuneração de Dirigentes das diversas empresas estatais brasileiras.',
      instituicao: 'Ministério do Planejamento Orçamento e Gestão',
      imagem: '../../../assets/images/siest.jpeg'
    },
    {
      titulo: 'SIEST - Plano de Previdência Complementar',
      descricao: 'Desenvolvimento do sistema para o controle dos planos de previdência das diversas empresas estatais brasileiras.',
      instituicao: 'Ministério do Planejamento Orçamento e Gestão',
      imagem: '../../../assets/images/siest.jpeg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
