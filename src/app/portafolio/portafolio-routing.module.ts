import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'proyectos',
    component:ProyectosComponent
  },
  {
    path:'habilidades',
    component:HabilidadesComponent
  },
  {
    path:'experiencia',
    component:ExperienciaComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
