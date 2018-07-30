import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/Router";
import { MenuItemComponent } from "./menu/menu-items/menu-item/menu-item.component";
import { MenuItemDescComponent } from "./menu/menu-item-desc/menu-item-desc.component";
import { CartListComponent } from "./cart/cart-list/cart-list.component";
import { MenuItemsComponent } from "./menu/menu-items/menu-items.component";
import { MenuItemsEditComponent } from "./menu/menu-items-edit/menu-items-edit.component";
import { MenuComponent } from "./menu/menu.component";

const appRoutes: Routes = [
    {path:'', redirectTo:'/menu',pathMatch:'full'},
    {path:'menu',component: MenuComponent,children:[
        {path:'',component: MenuItemsComponent},       
        {path:'edit',component: MenuItemsEditComponent},
        // {path:':name',component: MenuItemDescComponent},
        {path:'new',component: MenuItemsEditComponent}
    ]},
    {path:'menu/:name',component: MenuItemDescComponent},
   
    // {path:'deals',component: MenuItemDescComponent},
    {path:'cart',component: CartListComponent},
    {path:'customize',component: CartListComponent}
    
    ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}