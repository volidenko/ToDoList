import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/phone';
// import {  } from "../phone";


@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  model: string;
  manufacturer: string;
  price:number;
  phones: Phone[]=[];

  companies: string[]=["Apple", "Samsung", "Xiaomi", "Nokia"];

  constructor() { }

  ngOnInit(): void {
  }
  addPhone(){
    this.phones.push({model: this.model, manufacturer: this.manufacturer, price: this.price});
  }

}
