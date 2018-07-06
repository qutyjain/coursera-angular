import { Component, OnInit ,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  menuCategories: string[] = ["Pizza","Pasta","Sides","Drinks"];
  @Output() categorySelected = new EventEmitter<string>();
  selCategory:string ;
  constructor() { }

  ngOnInit() {
  }

  selectMenuCategory(event: Event){
    this.selCategory = event.srcElement.innerHTML;
    this.categorySelected.emit(this.selCategory);
  }
}
