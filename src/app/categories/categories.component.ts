import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { ICategory } from '../model/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, name: 'mohit', contact: 9669600672 },
    { id: 2, name: 'aashi', contact: 9669600671 },
    { id: 3, name: 'shivam', contact: 9669600673 },
    { id: 4, name: 'sai', contact: 9669600674 },
    // {id:2,name:'aashi',contact:9669600672},
  ];
  
  personSelected: ICategory | null = null;
  personEdit: ICategory | null = null;
  // personSelectedForView:ICategory | null =null;
  // personSelectedForEdit:ICategory | null =null;
  constructor() {}
  btnShowCondition=true;
  formConditionTrue = false;
  tableConditionTrue = true;
  showViewBoxCondition = true;
  showEditBoxConditon = true;
  personSelecteds = true;
  currentId!:number;
  ngOnInit(): void {}
  onCategoryAdd(category: ICategory) {
    console.log('added');
this.currentId= this.currentId+this.categories.length + 1;
console.log("curreneet id is"+this.currentId);
    category.id = this.categories.length + 1; 
    this.categories.push(category);
    this.tableConditionTrue = false;
  }
  onClickOpenForm() {
    console.log('Hello');
    this.formConditionTrue = true;
    this.tableConditionTrue = false;
  
  }
  onClickOpenTable() {
    this.formConditionTrue = false;
    this.tableConditionTrue = true;
  }
  onclickAddButton(boolCondition: boolean) {
    this.tableConditionTrue = boolCondition;
  }
  onclickAddButtonHideform(boolCondition: boolean) {
    this.formConditionTrue = boolCondition;
  }
  onPersonSelected(person: ICategory) {
    this.personSelected = person;
    this.btnShowCondition=false;
  }
  hideTableFunction(boolCondition: boolean) {
    this.tableConditionTrue = boolCondition;
  }
  showTableAfterView(boolCondition: boolean) {
    this.showViewBoxCondition = boolCondition;
    this.tableConditionTrue = true;
    this.btnShowCondition=true;
  }

  showViewBoxFunction(boolCondition: boolean) {
    this.showViewBoxCondition = boolCondition;
  }
  onPersonEdited(person: ICategory) {
    this.personEdit = person;
    this.btnShowCondition=true;
  }
  showEditBoxFunction(boolCondition: boolean) {
    this.showEditBoxConditon = boolCondition;
    this.btnShowCondition=false;
  }
  showTableAfterEdit(boolCondition: boolean) {
    this.showEditBoxConditon = boolCondition;
    this.tableConditionTrue = true;
  }
  showaddButton(boolCondition:boolean)
  {
    this.btnShowCondition=boolCondition;

  }
  onUpdatePerson(category: ICategory) {
    console.log("cater is printing "+JSON.stringify(this.categories));
    this.categories = this.categories.map((cat) => {
      if (category.id == cat.id) {
        return category;
      }
      return cat;
    });
    console.log("cat varazib "+JSON.stringify(category) );
    this.tableConditionTrue = true;
    this.showEditBoxConditon=false;
    this.btnShowCondition=true;
  }

  onPersonDelete(category: ICategory)
  {
      let index =this.categories.indexOf(category);
      this.categories.splice(index,1);

  }
}
