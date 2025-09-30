import { ProductInterface } from "./app/product.interface";
import { ProductModel } from "./app/product.model";

export function mapToInterface(product: ProductModel): ProductInterface {
    const iproduct:ProductInterface = {}
    iproduct.code = product.code;
    iproduct.description = product.description;
    iproduct.keywords = product.keywords;
    iproduct.nom = product.nom;
    iproduct.kcal = product.kcal;

    return iproduct;
}
