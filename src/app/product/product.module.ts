import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CartItemDetailComponent } from './components/cart-item-detail/cart-item-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    CartItemDetailComponent,
    OrderListComponent,
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductModule { }
