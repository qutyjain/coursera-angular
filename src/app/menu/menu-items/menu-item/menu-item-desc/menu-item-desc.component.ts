import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MenuItemService } from '../../../../shared/menuItem.service';

@Component({
  selector: 'app-menu-item-desc',
  templateUrl: './menu-item-desc.component.html',
  styleUrls: ['./menu-item-desc.component.css'],
  animations : [
    trigger("collapseDiv",[
      state('open',style({ height : '80px'})),
      state('close',style({ height : '0px', display: 'none'})),
      transition('open <=> close', animate('400ms'))
    ]
  )]
})
export class MenuItemDescComponent implements OnInit {

  divState:string;
  count:number = 0; 

  constructor(private menuItemService : MenuItemService) { }
  ngOnInit() {
  }

  onClickCollapse(){
    this.divState =  this.menuItemService.toggleItemDesc();
  }

  decreaseCount(){
    this.count =  this.count==0 ? 0: this.count-1;
  }
  increaseCount(){
    this.count = this.count==10 ?10: this.count+1;
  }
}
