import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';
import proyectos from 'data/db.json';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public nombre       :string = "";
  public realizadoEn  :string = "";
  public imagen       :string = "";
  public descripcion  :string = "";
  public titulo       :string = "";
  public url          :string = "";

}
