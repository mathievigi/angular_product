import { Component, inject, output } from '@angular/core';
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
    product = output<ProductInterface>();


    public submit() {
        if(this.form.valid){ 
            this.product.emit(this.form.getRawValue());
        } else {
            this.form.markAllAsTouched()
        }
    }


}
