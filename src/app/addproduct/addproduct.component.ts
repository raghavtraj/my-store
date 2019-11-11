import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myform: FormGroup;
  constructor() { }
  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    });
  }

}
