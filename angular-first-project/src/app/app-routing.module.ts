import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ProductComponent } from './components/product/product/product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'category/update/:id', component: EditCategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/update/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
