import { Component, inject, OnInit } from '@angular/core';
import { ProductFilterForm } from "../product.filter-form/product.filter-form";
import { ProductFilter } from '../../product.filter';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-products',
  imports: [ProductFilterForm],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {


    router = inject(Router);
    service = inject(ProductService);
    products:ProductModel[] = [];

    async ngOnInit(){
        this.products = await this.service.findAll({});
    }

    async search(filter:ProductFilter){
        this.products = await this.service.findAll(filter);
    }

    async delete(id: number) {
        await this.service.delete(id);
        this.products = await this.service.findAll({});
    }
    edit(id: number) {
        this.router.navigateByUrl("/products/edit/{{id}}")
    }
    view(id: number) {
        this.router.navigateByUrl("/products/{{id}}")
    }
    

}
