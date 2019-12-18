import { Component, OnInit, Input } from '@angular/core';
import {Receipes} from '../receipes.module';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
 @Input() receipe: Receipes;
  constructor() { }

  ngOnInit() {
  }

}
