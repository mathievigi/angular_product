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
       console.warn(this.filterform.value);
        if(this.filterform.valid){ 
            this.productFilter.emit(this.filterform.getRawValue());
        } else {
            console.log("form invalid")
            this.filterform.markAllAsTouched()
        }
    }

    public reset(){
        this.filterform.reset()
        this.productFilter.emit({});
    }


}
