import { ProductInterface } from "./product.interface"

export class ProductModel implements ProductInterface{
    id = 0;
    code = "";
    nom = "";
    description = "";
    keywords?:string;
    kcal?:number;
}
