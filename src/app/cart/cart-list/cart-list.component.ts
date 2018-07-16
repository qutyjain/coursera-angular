import { Component, OnInit } from '@angular/core';

import { item } from '../../menu/item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
 
  constructor(private cartService:CartService) { }
  cartItems:item[] = this.cartService.cartItems;
  ngOnInit() {
  }

}
