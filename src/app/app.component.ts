import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeScreen:string = "Menu";
  category:string = "Pizza";
  
  activatedFeature(feature: string){
    console.log(feature);
    this.activeScreen = feature;
    if(this.activeScreen==='Menu')
    console.log(this.activeScreen);
  }

  afterCategorySelected(category:string){
    console.log("afterCategorySelected :"+category);
    this.category = category;
  }
}
