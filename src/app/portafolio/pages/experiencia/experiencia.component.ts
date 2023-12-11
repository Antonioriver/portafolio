import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  public puesto:       string = "";
  public duracion:     string = "";
  public descripcion:  string = "";
  public duracionSemanal  :string = "";

}
