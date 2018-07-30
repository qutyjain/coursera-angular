import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { ActivatedRoute,Params, Router } from '@angular/Router';
import { MenuItemService } from '../menuItem.service';
import { CartService } from '../../cart/cart.service';
import { itemProperty } from '../itemProperty.model';
import { item } from '../item.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-menu-item-desc',
  templateUrl: './menu-item-desc.component.html',
  styleUrls: ['./menu-item-desc.component.css'],
  animations : [
    trigger("collapseDiv",[
      state('open',style({ height : '100px'})),
      state('close',style({ height : '0px', display: 'none'})),
      transition('open <=> close', animate('400ms'))
    ]
  )]
})
export class MenuItemDescComponent implements OnInit {

  divState:string;
  count:number = 1; 
  itemName:string;
  itemProperty: itemProperty;
  selectedItem : item;
  // @ViewChild('f') itemDescForm:NgForm;

  constructor(private menuItemService : MenuItemService,private router: Router, private route:ActivatedRoute,private cartService:CartService) {
    this.divState = 'close';
   }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.itemName = params['name'];
    });
  
    this.selectedItem = this.menuItemService.selectItemByName(this.itemName);
  }

  onSubmit(form:NgForm){
    console.log(form);
    this.cartService.addItemToCart(this.itemName,this.count,form.value.property.value);
//     this.route.params.subscribe(
//       (params : Params)=>{
//        this.itemName = params['name'];
//        this.cartService.addItemToCart(this.itemName,this.count);
      
//    }
//  );
  }

  onClickCollapse(){
    this.divState =  this.menuItemService.toggleItemDesc();
  }

  decreaseCount(){
    this.count =  this.count <= 1 ? 1: this.count-1;
  }
  increaseCount(){
    this.count = this.count >= 10 ?10: this.count+1;
  }

}
