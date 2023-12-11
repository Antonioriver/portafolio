import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input()
  identificador: string = "";
  @Input()
  value: string | undefined;
  @Input()
  tipo: string = "text";
  @Input()
  controlNombreFormulario:string="";
}
