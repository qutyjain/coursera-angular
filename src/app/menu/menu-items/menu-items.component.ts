import { Component, OnInit ,Input } from '@angular/core';
import {item} from "../item.model"
import { MenuItemService } from '../../shared/menuItem.service';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  activeScreenInMenu:{feature:string};
  constructor(private menuItemService: MenuItemService ) {
  }
  
  menuItems : item[] = this.menuItemService.items;
  ngOnInit() {
  }

}
