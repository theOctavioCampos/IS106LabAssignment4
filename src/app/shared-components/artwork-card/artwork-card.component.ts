import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-art-work-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtWorkCardComponent implements OnInit {

  @Input() artwork: any;
  constructor() { }

  ngOnInit() {
  }

}