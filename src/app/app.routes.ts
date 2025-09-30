import { Routes } from '@angular/router';
import { Products } from './component/products/products';
import { ProductEdit } from './component/product-edit/product-edit';
import { ProductCreate } from './component/product-create/product-create';
import { ProductView } from './component/product-view/product-view';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/edit/:id',
        component: ProductEdit
    },
    {
        path: 'products/new',
        component: ProductCreate
    },
    {
        path: 'products/:id',
        component: ProductView
    },

];
