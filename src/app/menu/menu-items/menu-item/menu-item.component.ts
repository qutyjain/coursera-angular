import { Component, OnInit, Input } from '@angular/core';
import { item } from '../../item.model';
import { MenuItemService } from '../../menuItem.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
     constructor(private menuItemService: MenuItemService) {
    this.menuItemService.menuCategoryUpdated.subscribe((status:string)=> this.itemCategorySelected = status);
   }

  @Input() singleMenuItem: item ;
  itemCategorySelected : string;
  
  ngOnInit() {
    this.itemCategorySelected = this.menuItemService.selCategory;
  }

  
}
