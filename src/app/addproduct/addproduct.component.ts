import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProductsService } from '../services/products.service';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myform: FormGroup;
  constructor( private productservice: ProductsService) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', [ Validators.required,Validators.maxLength(20), Validators.minLength(5)]),
      price: new FormControl('',[Validators.required, Validators.pattern(/[0-9]/)]),
      description: new FormControl('', Validators.maxLength(500)),
      image: new FormControl('', Validators.required),
      imageAlt: new FormControl(''),
      isAvailable: new FormControl(Boolean, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.myform.value);
    if (this.myform.valid) {
    this.productservice.add(this.myform.value);
    } else {
      alert( 'invalid' );
    }
    }

}
