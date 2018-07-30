import { Component, OnInit , OnDestroy} from '@angular/core';
import { CartService } from '../cart/cart.service';
import { item } from '../menu/item.model';
import { cart } from '../cart/cart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartTotal : number = 0;
  subscription:Subscription;
 
  constructor(private cartService:CartService) {
    this.cartTotal = this.cartService.calculateCartTotal();
    this.subscription = this.cartService.cartItemsUpdated.subscribe(
      (cartItems) => {   
        this.cartTotal = this.cartService.calculateCartTotal();
      }
     );
   }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
