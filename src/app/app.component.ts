import { Component } from '@angular/core';
import { MenuItemService } from './menu/menuItem.service';
import { CartService } from './cart/cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenuItemService,CartService]
    })
export class AppComponent {

  constructor(private menuItemService: MenuItemService){}
  
}
