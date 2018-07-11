import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { MenuItemComponent } from './menu/menu-items/menu-item/menu-item.component';
import { MenuItemsEditComponent } from './menu/menu-items-edit/menu-items-edit.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartListEditComponent } from './cart/cart-list-edit/cart-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCategoryComponent } from './menu/menu-category/menu-category.component';
import { MenuItemDescComponent } from './menu/menu-items/menu-item/menu-item-desc/menu-item-desc.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    MenuItemsEditComponent,
    MenuItemComponent,
    CartListComponent,
    CartListEditComponent,
    HeaderComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuItemDescComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule,NgbModule.forRoot(),BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }