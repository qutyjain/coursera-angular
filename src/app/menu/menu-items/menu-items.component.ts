import { Component, OnInit } from '@angular/core';
import {item} from "../item.model"


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
menuItems : item[] = [new item("Pizza","Vegie Supreme","thin",["tomatoes","Mushrooms"],"../../assets/VeggieSup.jpg"),
new item("Pizza","Meat Supreme","regular",["meat","tomatoes"],"../../assets/MeatSup.jpg")
]
  constructor() { }

  ngOnInit() {
  }

}
