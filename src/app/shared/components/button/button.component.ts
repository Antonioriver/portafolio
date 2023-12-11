import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  public url: string = "";
  @Input()
  public nombreBoton: string = "";
  @Input()
  public tipoBoton: string = "";
  @Input()
  public tipo: string = "button";

}
