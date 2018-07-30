import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list-edit',
  templateUrl: './cart-list-edit.component.html',
  styleUrls: ['./cart-list-edit.component.css']
})
export class CartListEditComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit() {
  }


  deleteCartItem(){
    this.cartService.deleteCartItem(this.cartService.selectedCartItem);
    
  }
}
