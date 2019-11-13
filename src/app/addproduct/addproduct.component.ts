import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  Product } from '../Model/product.'
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
//import { from } from 'rxjs';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {
  myform: FormGroup;
  id: number;
  sub: any;
  private selectedProduct;
  constructor( private productservice: ProductsService ,
               private route: ActivatedRoute) { }

  ngOnInit() {
     
     this.myform = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [ Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
      description: new FormControl('', [ Validators.required, Validators.maxLength(500)]),
      imageUrl: new FormControl('', Validators.required),
      isAvailable: new FormControl(Boolean, Validators.required),
      
    });

     this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(this.id);
      this.productservice.onEdit(this.id).subscribe
      (Response => { 
        this.selectedProduct = Response;
        console.log(this.selectedProduct);
        this.myform.patchValue
        ({
          title: this.selectedProduct.title,
          id: this.selectedProduct.id,
          price: this.selectedProduct.price,
          description: this.selectedProduct.description,
          imageUrl: this.selectedProduct.imageUrl,
        } )
       } );
      
      // In a real app: dispatch action to load the details here.
   });

  }
  
  onSubmit() {
    console.log(this.myform.value);
    if (this.myform.valid) {
      if(this.id){
        this.productservice.onModify(this.id,this.myform.value).subscribe(Response =>
          {
            console.log(Response);
            
          } );

      } else {
    this.productservice.addProduct(this.myform.value).subscribe(Response =>
      {
        console.log(Response);
      } );
    }
    } else {
      alert( 'invalid' );
    }
    }

}
