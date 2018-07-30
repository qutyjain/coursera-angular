import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { item } from '../../item.model';
import { MenuItemService } from '../../menuItem.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit , OnDestroy {
  menyCatSubscription: Subscription ;

  constructor(private menuItemService: MenuItemService) {
   this.menyCatSubscription =  this.menuItemService.menuCategoryUpdated.subscribe((status:string)=> this.itemCategorySelected = status);
   }

  @Input() singleMenuItem: item ;
  itemCategorySelected : string;
  
  ngOnInit() {
    this.itemCategorySelected = this.menuItemService.selCategory;
  }

  ngOnDestroy(){
    this.menyCatSubscription.unsubscribe();
  }

  
}
