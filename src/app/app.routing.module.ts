import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/Router";
import { MenuItemComponent } from "./menu/menu-items/menu-item/menu-item.component";
import { MenuItemDescComponent } from "./menu/menu-items/menu-item/menu-item-desc/menu-item-desc.component";
import { CartListComponent } from "./cart/cart-list/cart-list.component";
import { MenuItemsComponent } from "./menu/menu-items/menu-items.component";

const appRoutes: Routes = [
    {path:'', redirectTo:'/menu',pathMatch:'full'},
    {path:'menu',component: MenuItemsComponent},
    {path:'deals',component: MenuItemDescComponent},
    {path:'cart',component: CartListComponent},
    {path:'customize',component: CartListComponent}
    
    ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModue{

}