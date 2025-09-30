import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { ProductFormFactory } from '../../product.form-factory';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFilter } from '../../product.filter';

@Component({
  selector: 'app-product-filter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product.filter-form.html',
  styleUrl: './product.filter-form.scss'
})
export class ProductFilterForm {

    factory = inject(ProductFormFactory);
    filterform = this.factory.createFilterForm();
    productFilter = output<ProductFilter>();

    public submit() {
        if(this.filterform.invalid && (this.filterform.touched  || this.filterform.dirty )) { 
            console.log("form invalid")
            this.filterform.markAllAsTouched()
        } else {
            this.productFilter.emit(this.filterform.getRawValue());
        }
    }

    public reset(){
        this.filterform.reset()
        this.productFilter.emit({});
    }


}
