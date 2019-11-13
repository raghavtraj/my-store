import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() item;

  constructor(private productservice: ProductsService ,
              private route: ActivatedRoute) { }
    private id;
    selectedProduct;
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe (params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(this.id);
      this.productservice.onEdit(this.id).subscribe(Response => {
        this.selectedProduct = Response;
        //console.log(this.selectedProduct);
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
      this.productservice.onDelete(selectedId).subscribe();
    }
    else{
      alert('canceled');
    }
  
  }

}
