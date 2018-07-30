import { item } from "../menu/item.model";

export class cart{
    constructor(public item:item,public count:number,public property:string){
    }
}