import { item } from "../menu/item.model";

export class CartService{
    cartItems:item[] =[new item("Pizza","Vegie Supreme","thin",["tomatoes","Mushrooms"],"../../assets/VeggieSup.jpg"),
    new item("Pasta","Meat Supreme","regular",["meat","tomatoes"],"../../assets/Pasta.jpg")];
}