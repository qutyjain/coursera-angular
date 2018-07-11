import { Component } from '@angular/core';
import { trigger , state, style , animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [trigger("myFirstAnimation",
               [
                state('normal',style({height: '0px'  })),
                state('large',style({height: '100px'  })),
                transition('small <=> large', animate('400ms'))]
               
      )]

    })
export class AppComponent {
  activeScreen:string = "Menu";
  category:string = "Pizza";
  state: string = "small";

  animateMe(){
    this.state = this.state === 'small' ? 'large' : 'small';
  }
  
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
