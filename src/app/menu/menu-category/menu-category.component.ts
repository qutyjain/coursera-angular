import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  menuCategories: string[] = ["Pizza","Pasta","Sides","Drinks"];
  constructor() { }

  ngOnInit() {
  }

}
