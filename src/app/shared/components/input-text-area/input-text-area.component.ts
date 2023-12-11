import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent {
 @Input()
 identificador: string = "";
 @Input()
 controlNombreFormulario:string = "";
}
