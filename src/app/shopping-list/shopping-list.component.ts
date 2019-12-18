import { Component, OnInit, Input } from '@angular/core';
import { Ingradient }  from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 @Input() selectedingradName;
 ingradients: Ingradient[] =[
    new Ingradient('apple', 30),
    new Ingradient('banana', 130),
    new Ingradient('eggs', 230),
 ];
 
  constructor() { }

  ngOnInit() {
  }
  
  onIngradientAdded(ingradient: Ingradient){
    this.ingradients.push(ingradient);
  }
  
  onSelectIngrd(ingradient: Ingradient){
    this.selectedingradName = ingradient;
  }
  
  

}
