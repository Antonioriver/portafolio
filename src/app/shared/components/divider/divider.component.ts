import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  @Input()
  public titulo: string = "";
}
