import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MenuItemService } from '../menuItem.service';
import { Subscription } from 'rxjs';
import { itemProperty } from '../itemProperty.model';
import { NgForm } from '@angular/forms';
import { item } from '../item.model';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-menu-items-edit',
  templateUrl: './menu-items-edit.component.html',
  styleUrls: ['./menu-items-edit.component.css']
})
export class MenuItemsEditComponent implements OnInit ,OnDestroy {
itemcategory : string;
itemProperty : itemProperty ;
@ViewChild('f') itemEditForm : NgForm ;

  constructor(private menuItemservice:MenuItemService,private router: Router,private route: ActivatedRoute) { 
    this.itemcategory = this.menuItemservice.selCategory;
    this.menuItemservice.menuCategoryUpdated.subscribe(
      (category:string)=> {
        this.itemcategory = category;
        this.itemProperty = this.menuItemservice.selectItemPropertyBycategory(this.itemcategory);
        }
      );
    this.itemProperty = this.menuItemservice.selectItemPropertyBycategory(this.itemcategory);
  }

ngOnInit() {
 
 
  }

addItem(){
  let formValue =  this.itemEditForm.value;
  let propertyArray : string[]=[];
  for (let i of this.itemProperty.value){
     if(formValue.property[i])
      propertyArray.push(i); 
    }

  this.menuItemservice.addItem(
    new item(this.itemcategory,formValue.name,
      new itemProperty(this.itemcategory,propertyArray),formValue.ingredients.ingredient,
      formValue.imagePath));
  this.router.navigate(['../menu']);
  }
  
deleteItem(){
  this.clearItem();
  this.router.navigate(['../menu']);
  this.menuItemservice.deleteItem(name);
}

clearItem(){
  this.itemEditForm.reset();
}

onSubmitForm(form : NgForm){
  this.itemEditForm = form ;
  console.log(form);
  }

ngOnDestroy(){

}
  
}
