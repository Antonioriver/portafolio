import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/portafolio/interfaces/proyecto.interface';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public nombre       :string = "";
  @Input()
  public realizadoEn  :string = "";
  @Input()
  public imagen       :string = "";
  @Input()
  public descripcion  :string = "";
  @Input()
  public url  :string = "";
}
