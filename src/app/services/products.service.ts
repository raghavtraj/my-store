import { Injectable } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { Product } from  '../Model/product.';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  actionUrl: string = environment.baseUrl ;
  constructor(private http: HttpClient ) { }

  getProducts() {
   return this.http.get(this.actionUrl + '/product/');
  }
  addProduct(product1) {
    return this.http.post(this.actionUrl + '/product/', product1);
 }
  onEdit(id) {
    return  this.http.get(this.actionUrl + '/product/' + id);

  }
  onModify(id, form)
  {
    return this.http.put(this.actionUrl + '/product/' + id, form );
  }
  onDelete(id)
  {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
}

