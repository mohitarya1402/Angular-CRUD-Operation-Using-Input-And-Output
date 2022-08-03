import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../model/ICategory';
@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  @Input() editperson!:ICategory;
@Output() hideEdit = new EventEmitter<boolean>();
@Output() showTable=new EventEmitter<boolean>();
@Output() showAddButton = new EventEmitter<boolean>();
@Output() personUpdated = new EventEmitter<ICategory>();
  constructor() { }
  id?:any;
  name:string='';
  contact!:number;

  ngOnInit(): void {
    this.id=this.editperson.id;
    this.name=this.editperson.name;
    this.contact=this.editperson.contact;
  }
  // ngOnChanges()
  // {
  //   this.name=this.editperson.name;
  //   this.contact=this.editperson.contact;
  // }
  ngOnChanges() {
this.id=this.editperson.id;
    this.name = this.editperson.name;
    this.contact = this.editperson.contact;

  }
  onClickEditGoback()
  {
  this.showTable.emit(false);
  this.hideEdit.emit(false);
  this.showAddButton.emit(true);
  }
  onClickUpdateDeatils()
  {
    // console.log("object is printing "+JSON.stringify(this.editperson));
    let person:ICategory = {
      id:this.id,
      name:this.name,
      contact:this.contact
    };
    this.personUpdated.emit(person)
// console.log("person details is "+JSON.stringify(person));
  }
}
