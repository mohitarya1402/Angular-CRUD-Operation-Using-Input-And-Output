import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from '../model/ICategory';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  id!:number;
name!:string;
contact!:number;
@Output() categoryAdd =new EventEmitter<ICategory>();
@Output() showTableCondition=new EventEmitter<boolean>();
@Output() showFormCondition=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddPerson()
  {
  let category:ICategory={
    id:this.id,
  name:this.name,
  contact:this.contact
  }
  this.categoryAdd.emit(category)
  this.showTableCondition.emit(true);
  this.showFormCondition.emit(false);
  }
}
