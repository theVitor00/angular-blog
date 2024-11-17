import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent implements OnInit {
  @Input()
  date: string = ""
  @Input()
  time: string = ""
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  id:string = "0";

  constructor() { }

  ngOnInit(): void {

  }
}
