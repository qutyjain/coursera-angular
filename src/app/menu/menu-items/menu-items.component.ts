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
  constructor(private menuItemService: MenuItemService,private router: Router, private route:ActivatedRoute ) {
    this.menuItemService.itemsUpdated.subscribe(
      (items:item[])=>{
        this.menuItems = items;
      }
    )
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
