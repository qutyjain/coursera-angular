import { itemProperty } from "./itemProperty.model";

export class item {
    constructor(public itemCategory:string,public itemName:string,public itemProperty:itemProperty,public ingredients:string,public imagePath:string){}
}
