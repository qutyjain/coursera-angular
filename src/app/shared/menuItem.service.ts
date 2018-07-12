import { EventEmitter} from "@angular/core"
import { item } from "../menu/item.model";


export class MenuItemService{
    divState : string ='close';
    items:item[] = [new item("Pizza","Vegie Supreme","thin",["tomatoes","Mushrooms"],"../../assets/VeggieSup.jpg"),
    new item("Pasta","Meat Supreme","regular",["meat","tomatoes"],"../../assets/Pasta.jpg")];
    menuCategories: string[] = ["Pizza","Pasta","Sides","Drinks"];
    selCategory:string ='Pizza';
    
    menuCategoryUpdated =  new EventEmitter<string>();
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