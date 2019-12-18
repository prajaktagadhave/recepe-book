import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Ingradient }  from '../../shared/ingradient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amtInput') amtInputRef: ElementRef;
   
   @Output() ingardientAdded = new EventEmitter<Ingradient>();
       
    constructor() { }

    ngOnInit() {
    }

    onAddItem(){
       const inName = this.nameInputRef.nativeElement.value;
       const inAmt = this.amtInputRef.nativeElement.value; 
       const newIngradient  = new Ingradient(inName,inAmt);
       this.ingardientAdded.emit(newIngradient);
    }
       
    
}
