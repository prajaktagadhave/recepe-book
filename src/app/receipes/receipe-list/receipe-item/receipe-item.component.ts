import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Receipes} from '../../receipes.module';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Receipes;
  @Output() receipeSelcted = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(){
   this.receipeSelcted.emit();
   }

}
