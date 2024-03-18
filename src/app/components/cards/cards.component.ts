import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  @Input() card!: Location;

  ngOnInit(): void {
  
  }

}
