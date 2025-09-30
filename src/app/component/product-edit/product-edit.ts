import { Component, inject } from '@angular/core';
import { ProductForm } from "../product.form/product.form";
import { ProductInterface } from '../../product.interface';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-edit',
  imports: [ProductForm],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss'
})
export class ProductEdit {

    router = inject(Router);
    service = inject(ProductService);


    async save(product:ProductInterface){
        await this.service.create(product);
        this.router.navigateByUrl("/products");
    }

}
