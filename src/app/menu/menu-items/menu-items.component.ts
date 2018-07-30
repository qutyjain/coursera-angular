import { Component, OnInit, OnDestroy } from '@angular/core';
import {item} from "../item.model"
import { MenuItemService } from '../menuItem.service';
import { Router, ActivatedRoute } from '@angular/Router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit,OnDestroy {
  menuItems : item[];
  categorySelected:string;

  constructor(private menuItemService: MenuItemService,private router: Router, private route:ActivatedRoute ) {
    this.categorySelected =this.menuItemService.selCategory;
    this.menuItemService.itemsUpdated.subscribe(
      (items:item[])=>{
        this.menuItems = items;
      }
    );
    this.menuItemService.menuCategoryUpdated.subscribe( (category:string )=> {
      this.categorySelected =this.menuItemService.selCategory;
    }
    );
  }
  
  ngOnInit() {
    this.menuItems = this.menuItemService.getItems();
  }

  addNewDish(category: string){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  ngOnDestroy(){
    // this.menuItemService.itemsUpdated.unsubscribe();
  }
}
