import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../model/ICategory';

@Component({
  selector: '[app-single-category]',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
@Input() category!:ICategory;
@Output() personSelected=new EventEmitter<ICategory>();
@Output() personEdit=new EventEmitter<ICategory>();
@Output() personDelete=new EventEmitter<ICategory>();
@Output() hideTable=new EventEmitter<boolean>();
@Output() showViewBox=new EventEmitter<boolean>();
@Output() showEditBox=new EventEmitter<boolean>();
currentdata!:number;  
constructor() { }

  ngOnInit(): void {
  }
  onClickViewData()
  {
  this.personSelected.emit(this.category)
  this.showViewBox.emit(true)
  this.hideTable.emit(false);
  }
  onClickEditData()
  {
    this.personEdit.emit(this.category)
    this.showEditBox.emit(true)
    this.hideTable.emit(false); 
  }
  onClickDelete()
  {
    var c = confirm("Are you sure you want to delete");
    // console.log("confirm condition "+c);
    if(c)
    {
      this.personDelete.emit(this.category)
    }
  }
}
