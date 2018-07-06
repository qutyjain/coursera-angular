import { Component, OnInit ,Input } from '@angular/core';
import {item} from "../item.model"


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  activeScreenInMenu:{feature:string};
  @Input() selectedCategory : string ;
menuItems : item[] = [new item("Pizza","Vegie Supreme","thin",["tomatoes","Mushrooms"],"../../assets/VeggieSup.jpg"),
new item("Pasta","Meat Supreme","regular",["meat","tomatoes"],"../../assets/Pasta.jpg")
]
  constructor() { }

  ngOnInit() {
  }

}
