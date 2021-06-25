import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductItemComponent,
  ProductListComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
