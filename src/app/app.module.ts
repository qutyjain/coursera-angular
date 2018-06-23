import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuItemComponent } from './menu/menu-items/menu-item/menu-item.component';
import { MenuItemsEditComponent } from './menu/menu-items-edit/menu-items-edit.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartListEditComponent } from './cart/cart-list-edit/cart-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    MenuItemsEditComponent,
    MenuItemComponent,
    CartListComponent,
    CartListEditComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }