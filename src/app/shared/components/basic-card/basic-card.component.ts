import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css']
})
export class BasicCardComponent {
  @Input()
  public puesto       :string = "";
  @Input()
  public duracion     :string = "";
  @Input()
  public descripcion  :string = "";
  @Input()
  public duracionSemanal  :string = "";

}
