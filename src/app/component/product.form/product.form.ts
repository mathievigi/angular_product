import { Component, effect, inject, input, model, OnInit, output } from '@angular/core';
import { ProductFormFactory } from '../../product.form-factory';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductInterface } from '../../product.interface';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product.form.html',
  styleUrl: './product.form.scss'
})
export class ProductForm {
   
    factory = inject(ProductFormFactory);
    form = this.factory.createForm();
    input_product = input<ProductInterface>({});
    output_product = output<ProductInterface>();

    constructor() {
        effect(() => {
            const product = this.input_product();
            if (product) {
                this.form.patchValue(product);
            }
        });
    }

    public submit() {
        if(this.form.valid){ 
            this.output_product.emit(this.form.getRawValue());
        } else {
            this.form.markAllAsTouched()
        }
    }


}
