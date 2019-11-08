import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  Myproduct: Product = {
    name: 'Macbook air',
    // tslint:disable-next-line: max-line-length
    image: `../assets/macbook.jpg`,
    price: 50000,
    description: '',
    imageAlt: 'macbook',
    isAvailable: false };

    Products: Array<Product> = [
  {
    name: 'Macbook air',
    image: '../assets/macbook.jpg',
    price: 50000,
    description: '',
    imageAlt: 'macbook',
    isAvailable: true,
  },
  {
    name: 'Poco f1',
    image: '../assets/poco.jpg',
    price: 17000,
    description: '',
    imageAlt: 'Poco',
    isAvailable: true,
  },
  {
    name: 'Sachin MRF',
    image: '../assets/bat.jpg',
    price: 7000,
    description: '',
    imageAlt: 'bat',
    isAvailable: true,
  },
  {
    name: 'Renault Duster',
    image: '../assets/duster.jpg',
    price: 1007000,
    description: '',
    imageAlt: 'duster',
    isAvailable: true,
  },
  {
    name: 'Honda Dio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2bvxfBDroCqt0w6crqYcy9f2Ez2JS5PNuF7tiytZ9HoK96xQ&s',
    price: 70000,
    description: '',
    imageAlt: 'dio',
    isAvailable: true,
  },
  {
    name: 'Arduino Uno',
    // tslint:disable-next-line: max-line-length
    image: 'https://images-na.ssl-images-amazon.com/images/I/61eicP72f-L._SX342_.jpg',
    price: 1000,
    description: '',
    imageAlt: 'uno',
    isAvailable: true,
  },
  {
    name: 'Otto Shirts',
    image: `https://st1.bollywoodlife.com/wp-content/uploads/2018/12/dulquer-salmaan-mumbai-police.jpg`,
    price: 1000,
    description: '',
    imageAlt: 'shirt',
    isAvailable: false,
  },

  {
    name: 'Five point someone',
    image: 'https://images-na.ssl-images-amazon.com/images/I/511wMMedbhL._SX327_BO1,204,203,200_.jpg',
    price: 3900,
    description: '',
    imageAlt: 'book',
    isAvailable: true,
  },
  {
    name: 'Fastrack',
    image: 'https://rukminim1.flixcart.com/image/714/857/jkk1hu80/watch/b/y/f/3166km01-fastrack-original-imaf7wy3whznbnta.jpeg?q=50',
    price: 1000,
    description: '',
    imageAlt: 'watch',
    isAvailable: false,
  },
  {
    name: 'Puma Shues',
    image: 'https://rukminim1.flixcart.com/image/714/857/juip0nk0/shoe/u/q/q/371168-9-puma-black-white-original-imaffnfvxqyc4k7h.jpeg?q=50',
    price: 1200,
    description: '',
    imageAlt: 'uno',
    isAvailable: true,
  },
  ];
  ngOnInit() {
  }

}
