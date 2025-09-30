import { Component, inject, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ProductForm } from "../product.form/product.form";
import { ProductInterface } from '../../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { ProductModel } from '../../product.model';
import { mapToInterface } from '../../../product.mapper';

@Component({
  selector: 'app-product-edit',
  imports: [ProductForm],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss'
})
export class ProductEdit implements OnInit{

    router = inject(Router);
    service = inject(ProductService);
    activatedRoute = inject(ActivatedRoute);
    product:ProductInterface = {
      code: '',
      nom: '',
      description: ''
    };


    async ngOnInit() {
        const id = this.activatedRoute.snapshot.params["id"];
        const result = await this.service.findById(id);
        this.product = mapToInterface(result);
    }

    async save(product:ProductInterface){
      await this.service.create(product);
      this.router.navigateByUrl("/products");
       
    }

}
