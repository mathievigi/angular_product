import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductFilter } from './product.filter';
import { ProductInterface } from './product.interface';
import { environment } from '../environments/environment.development';

const BASE_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    prod1:ProductModel = {id:1, code:"code1", nom: "nom1", description: "description1", keywords: "keywords1", kcal:1}; 
    prod2:ProductModel = {id:2, code:"code2", nom: "nom2", description: "description2", keywords: "keywords2", kcal:2}; 

    products : ProductModel[] = [this.prod1, this.prod2];

    findAll(filter:ProductFilter): Promise<ProductModel[]>{
        return new Promise((resolve, reject) => {
            resolve(this.products);
        });
    }

    findById(id:number): Promise<ProductModel>{
        return new Promise((resolve, reject) => {
            resolve(this.prod1);
        });
    }

    create(product:ProductInterface): Promise<ProductModel>{
        return new Promise((resolve, reject) => {
            let new_prod = new ProductModel();
            new_prod.code = product.code!;
            resolve(new_prod);
        });
    }

    update(product:ProductModel): Promise<ProductModel>{
        return new Promise((resolve, reject) => {
            resolve(product);
        });
    }

    delete(id:number): Promise<boolean>{
        return new Promise((resolve, reject) => {
            console.log("BASE_URL=", BASE_URL)
            resolve(true);
        });
    }

  
}
