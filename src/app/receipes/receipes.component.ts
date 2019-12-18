import { Component, OnInit } from '@angular/core';
import {Receipes} from './receipes.module';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  selcetedReceipes: Receipes;
  constructor() { }

  ngOnInit() {
  }

}
