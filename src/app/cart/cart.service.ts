import { item  } from "../menu/item.model";
import { Injectable, EventEmitter } from "@angular/core";
import { MenuItemService } from "../menu/menuItem.service";
import { Subject } from "rxjs";
import { cart } from "./cart.model";



@Injectable()
export class CartService{
    constructor(private menuItemService:MenuItemService){}
    cartItemsUpdated =  new Subject<cart[]>();
    cartItems:cart[] =[];
    selectedCartItem:cart; 

    addItemToCart(itemName:string, count:number, property: string){
        console.log("called");
        if(this.cartItems.length>0){
            let itemIncart = this.findCartItemByNameAndProperty(itemName,property);
            if(itemIncart){
                itemIncart.count = itemIncart.count+count;
             }
             else
             this.cartItems.push(new cart( this.menuItemService.selectItemByName(itemName),count,property));
            }
        else{           
            this.cartItems.push(new cart( this.menuItemService.selectItemByName(itemName),count,property));
        }   
     
        this.cartItemsUpdated.next(this.cartItems);
    }

    findCartItemByName(name:String){
        return this.cartItems.find( x => x.item.itemName===name);
    }

    findCartItemByNameAndProperty(name:String,property:string){
        return this.cartItems.find( x => (x.item.itemName===name && x.property === property) );
    }

    calculateCartTotal(){
        let total:number = 0;
        this.cartItems.forEach(x=>{
            let count : number = x.count;
            total = total + count;
        });

        return total;
    }

    setSelectedItem(cartItem:cart){
        this.selectedCartItem = cartItem;
    }

    updateSelectedItemCount(cartItem:cart, qty:number){
        this.setSelectedItem(cartItem);
        let item = this.findCartItemByNameAndProperty(cartItem.item.itemName,cartItem.property);
        if(item){
            item.count = qty;
            this.cartItemsUpdated.next(this.cartItems);
        }
    }

    deleteCartItem(cartItem:cart){
        let index =  this.cartItems.findIndex(x =>x.item.itemName === cartItem.item.itemName && x.property === cartItem.property);
        this.cartItems.splice(index,1);
        this.cartItemsUpdated.next(this.cartItems);
        }

      
    
}