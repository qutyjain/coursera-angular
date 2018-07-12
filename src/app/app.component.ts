import { Component } from '@angular/core';
import { MenuItemService } from './shared/menuItem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenuItemService]
    })
export class AppComponent {

  constructor(private menuItemService: MenuItemService){}
  
  activeScreen:string = "Menu";
  category:string = this.menuItemService.selCategory;
  
  activatedFeature(feature: string){
    this.activeScreen = feature;
    }
}
