import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../../data/dataFake';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.responsive.css']
})

export class HomeComponent implements OnInit {

  bigCard:any = {};
  smallCards:any[] = [];

  ngOnInit(): void {
    this.bigCard = dataFake[0];
    this.smallCards = dataFake.slice(1);
  }
}
