import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProjetosComponent} from './views/projetos/projetos.component';
import {CertificadosComponent} from './views/certificados/certificados.component';
import {ContatoComponent} from './views/contato/contato.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'certificados', component: CertificadosComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
