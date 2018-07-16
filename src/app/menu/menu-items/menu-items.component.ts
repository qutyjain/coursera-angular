import { Component, OnInit } from '@angular/core';
import {item} from "../item.model"
import { MenuItemService } from '../menuItem.service';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  menuItems : item[];
  constructor(private menuItemService: MenuItemService ) {
  }
  
  ngOnInit() {
    this.menuItems = this.menuItemService.getItems();
  }

}
