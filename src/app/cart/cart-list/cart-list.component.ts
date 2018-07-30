import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { item } from '../../menu/item.model';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { cart } from '../cart.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit,OnDestroy {
 
  subscription : Subscription;
  cartItems:cart[];
  cartTotal:number;
  numberRange :number[] = [1,2,3,4,5,6,7,8,9,10];
  cartListForm:FormGroup;
  @ViewChild('e') qtyElement:ElementRef;

  constructor(private cartService:CartService) { 
    this.cartItems = this.cartService.cartItems;
    this.subscription = this.cartService.cartItemsUpdated.subscribe(
      (cartItems:cart[]) => {
        this.cartItems = cartItems;
         this.cartTotal = this.cartService.calculateCartTotal();
       }
     );
  }
  
  ngOnInit() {
   this.cartListForm = new FormGroup({
   });
  }

  onQtyChange(cartItem:cart,event:any){
    this.cartService.updateSelectedItemCount(cartItem,parseInt(event.target.value));
     }

  populateSelectedItem(cartItem:cart){
    this.cartService.setSelectedItem(cartItem);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
