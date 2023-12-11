import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    InicioComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ]
})
export class PortafolioModule { }
