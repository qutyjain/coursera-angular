import { EventEmitter} from "@angular/core"
import { item } from "../menu/item.model";


export class MenuItemService{
    divState : string ='close';
    private items:item[] = [new item("Pizza","Vegie Supreme","thin",["tomatoes","Mushrooms"],"../../assets/VeggieSup.jpg"),
    new item("Pasta","Meat Supreme","regular",["meat","tomatoes"],"../../assets/Pasta.jpg"),
    new item("Sides","Garlic Bread ","Supreme",["Cheese","Bread"],"../../assets/GarlicBread.jpg"),
    new item("Drinks","Cold Coffee","Medium",["Milk","Coffee Beans"],"../../assets/ColdCoffee.jpg")];
    menuCategories: string[] = ["Pizza","Pasta","Sides","Drinks"];
    selCategory:string ='Pizza';

    menuCategoryUpdated =  new EventEmitter<string>();
    
    getItems(){
        return this.items.slice();
    }
    
     toggleItemDesc(){
        return this.divState = this.divState === 'close' ? 'open' : 'close';
    }

    updateMenuCategory(category: string){
        this.selCategory = category;
    }

    selectItemByCategory(category:string){
        return this.items.find(x => x.itemCategory === category);
    }
}