import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProjetosComponent} from './views/projetos/projetos.component';
import {CertificadosComponent} from './views/certificados/certificados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'certificados', component: CertificadosComponent},
  {path: 'projetos', component: ProjetosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
