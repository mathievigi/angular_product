import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductFormFactory {

    formBuilder = inject(NonNullableFormBuilder);

    createFilterForm(){
        return this.formBuilder.group({
            code: this.formBuilder.control("", [Validators.required]),
            nom: this.formBuilder.control("", [Validators.required]),
        })
    }


    createForm(){
        return this.formBuilder.group({
            code: this.formBuilder.control("", [Validators.required]),
            nom: this.formBuilder.control("", [Validators.required]),
            description: this.formBuilder.control("", [Validators.required]),
            keywords: this.formBuilder.control(""),
            kcal: this.formBuilder.control(0),
        })
    }
  
}
