import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
    
  @Output() activateFeature = new EventEmitter<string>();
    
  activeScreen(feature:string){
   this.activateFeature.emit(feature);
}
}
