import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
   products;
  count = 0;
  constructor( private productservices: ProductsService) { }

  ngOnInit() {
    this.productservices.getProducts().subscribe(Response => {
        console.log(Response);
        this.products = Response;
       } );
  }
  deleted(data)
  {
    this.productservices.getProducts().subscribe(Response => { this.products = Response; } );
  }
  cartcount(id)
  {
    this.count++;
    console.log(this.count);

  }
}
