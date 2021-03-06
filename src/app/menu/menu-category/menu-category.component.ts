import { Component, OnInit ,EventEmitter } from '@angular/core';
import { MenuItemService } from '../menuItem.service';


@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  menuCategories =  this.menuItemService.menuCategories;
  constructor(private menuItemService: MenuItemService){}

  ngOnInit() {
  }

  selectMenuCategory(event: Event){
    this.menuItemService.updateMenuCategory(event.srcElement.innerHTML);
    this.menuItemService.menuCategoryUpdated.next(event.srcElement.innerHTML);
    }
}
