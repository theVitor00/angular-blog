import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrl: './white-card.component.css'
})
export class WhiteCardComponent {

  @Input()
  whiteCardDate:string = "";
  @Input()
  whiteCardImage:string = "";
  @Input()
  whiteCardTitle:string = "";
  @Input()
  whiteCardDescription:string = "";
  @Input()
  id:string | null = "0";

  constructor() {}

}
