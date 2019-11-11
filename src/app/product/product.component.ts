import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService} from '../services/products.service';
import { Product} from '../Model/product.';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  private products: Array <Product>;
  constructor( private productservices: ProductsService) { }

 /* Myproduct: Product = {
    name: 'Macbook air',
    // tslint:disable-next-line: max-line-length
    image: `../assets/macbook.jpg`,
    price: 50000,
    description: '',
    imageAlt: 'macbook',
    isAvailable: false }; */
  ngOnInit() {
      this.products = this.productservices.getProducts(); 
  }
}
