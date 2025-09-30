import { Component, inject } from '@angular/core';
import { ProductInterface } from '../../product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.html',
  styleUrl: './product-view.scss'
})
export class ProductView {

    activatedRoute = inject(ActivatedRoute);
    service = inject(ProductService);
    product:ProductModel = {
        id: 0,
        code: '',
        nom: '',
        description: '',
        keywords: ''
    };

    async view(product:ProductInterface){
        const id = this.activatedRoute.snapshot.params["id"];
        this.product = await this.service.findById(id);
    }

}
