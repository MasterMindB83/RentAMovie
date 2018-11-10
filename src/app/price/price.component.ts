import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  price: string;
  valute: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPrice().subscribe((data) => {
      this.price = data[0].price;
      this.valute = data[0].valute;
    });
  }
  savePrice() {
    this.data.updatePrice(this.price, this.valute).subscribe((data) => console.log('Price updated.'));
    alert('Price updated.');
  }
}
