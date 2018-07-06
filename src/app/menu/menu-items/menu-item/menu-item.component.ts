import { Component, OnInit, Input } from '@angular/core';
import { item } from '../../item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() itemCategorySelected :string ;
  @Input() singleMenuItem : item;
  
  constructor() { }

  ngOnInit() {
  }

  
}
