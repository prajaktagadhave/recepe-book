import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Receipes} from '../receipes.module';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
    @Output() receipeWasSelcted = new EventEmitter<Receipes>();
    receipes: Receipes[] = [
        new Receipes('Test Receipe', 'Test receipe description', 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps187568_SD153320D12_05_1b.jpg'),
        new Receipes('Test Receipe1', 'Test receipe description1', 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps187568_SD153320D12_05_1b.jpg')
    ];
    
    constructor() { }

    ngOnInit() {
    }

    onReceipeSelected(receipe: Receipes){
        this.receipeWasSelcted.emit(receipe);
    }
 
}
