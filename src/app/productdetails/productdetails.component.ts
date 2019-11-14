import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';




@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() item;
  @Input() count;
  @Output() isDeleted = new EventEmitter(); // event emitter should import from angular core
  @Output() addCart = new EventEmitter();
  constructor(private productservice: ProductsService ,
              private route: ActivatedRoute,
              private Route2: Router) { }
    private id;
    selectedProduct;
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe (params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(this.id);
      this.productservice.onEdit(this.id).subscribe(Response => {
        this.selectedProduct = Response;
        if (this.id)
        {
          this.item = this.selectedProduct;
          console.log(this.item);
        }
      });
    });
  }
  onDelete(selectedId)
  {
    if(confirm('Are you sure to delete this product'))
    {
      this.productservice.onDelete(selectedId).subscribe(Response =>  this.isDeleted.emit('deleted'));
    } else {
      alert('canceled');
    }
  }
  addcart(selectedId)
  {
    this.addCart.emit(selectedId);
  }
}
