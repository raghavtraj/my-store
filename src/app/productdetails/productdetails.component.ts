import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/product.';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
