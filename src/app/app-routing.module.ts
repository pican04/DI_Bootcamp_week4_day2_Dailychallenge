import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorProductComponent } from './color-product/color-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'color/product', component: ColorProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
