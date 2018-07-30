import { item } from "../menu/item.model";
import { Subject } from "rxjs";
import { itemProperty } from "./itemProperty.model";
import { NgForm } from "@angular/forms";


export class MenuItemService{
    divState : string ='close';

    private items:item[] = [new item("Pizza","Vegie Supreme",
    new itemProperty('Pizza',['Thin', 'Hand Tossed', 'Regular']),'Vegeterian',"../../assets/VeggieSup.jpg"),
    new item("Pasta","Meat Supreme",
    new itemProperty('Pasta',['Mushroom','Pesto']),"Non-Vegeterian","../../assets/Pasta.jpg"),
    new item("Sides","Garlic Bread ",
    new itemProperty('Sides',['Cheese','Cinnamon']),'Vegeterian',"../../assets/GarlicBread.jpg"),
    new item("Drinks","Cold Coffee",
    new itemProperty('Drinks',['Large','Medium','Small']),'Vegeterian',"../../assets/ColdCoffee.jpg")];
    
    
    menuCategories: string[] = ["Pizza","Pasta","Sides","Drinks"];
    selCategory:string ='Pizza';
    itemsUpdated = new Subject<item[]>();
    menuCategoryUpdated =  new Subject<string>();
    
    getItems(){
        return this.items.slice();
    }
    
    addItem( item: item ){
        this.items.push(item);
        this.itemsUpdated.next(this.items);
    }
    
     toggleItemDesc(){
        return this.divState = this.divState === 'close' ? 'open' : 'close';
    }

    updateMenuCategory(category: string){
        this.selCategory = category;
        this.menuCategoryUpdated.next(this.selCategory);
    }

    selectItemByCategory(category:string){
        return this.items.find(x => x.itemCategory === category);
    }

    selectItemPropertyBycategory(category:string){
        if(category === 'Pizza')
        return new itemProperty(category,['Thin', 'Hand Tossed', 'Regular']);
        else
        if(category === 'Pasta')
        return new itemProperty(category, ['Mushroom','Pesto']);
        else
        if(category === 'Drinks')
        return new itemProperty(category,['Large','Medium','Small']);
        else
        if(category === 'Sides')
        return new itemProperty(category, ['Cheese','Cinnamon']);
        }

        selectItemByName(name:string){
            return this.items.find(x => x.itemName === name);
        }

        deleteItem(name:string){
            return this.items.slice(this.items.findIndex(x => x.itemName === name),1);
        }

  }