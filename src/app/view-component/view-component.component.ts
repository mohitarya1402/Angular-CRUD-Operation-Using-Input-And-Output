import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../model/ICategory';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
@Input() person!:ICategory ;
@Output() showTable=new EventEmitter<boolean>();
@Output() hideView=new EventEmitter<boolean>();
goBackIsTrue=true
  constructor() { }

  ngOnInit(): void {
  }
  goBackToTable()
  {
this.showTable.emit(false);
this.hideView.emit(false);
  }
}
