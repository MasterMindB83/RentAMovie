import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  movies: Object;
  rented_by: string;
  rented_by2: string;
  rented_date: number;
  return_date: number;
  users: Object;
  id: number;
  price: number;
  valute: string;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
    this.data.getUsers().subscribe((data) => this.users = data);
    this.getPrice();
  }
  rent() {
    if (this.rented_by == null) {
      this.data.rentMovie(this.id, this.rented_by2).subscribe((data) => console.log('Movie is rented.'));
      alert('Movie is rented.');
      this.refreshData();
    } else {
      this.data.returnMovie(this.id).subscribe((data) => {
        console.log('Movie is returned.');
      });
      this.return_date = Date.now();
      let difference = this.calcDiff(this.return_date, this.rented_date);
      if (difference >= 0) {
        difference = 1;
      }
      const price = this.price * difference;
      alert('Movie is returned.' + ' Days rented: ' + difference + '. Price: ' + price + ' ' + this.valute);
      this.refreshData();
    }
  }
  calcDiff(firstDate, secondDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / (oneDay)));
    return diffDays;
  }
  getPrice() {
    this.data.getPrice().subscribe((data) => {
      this.price = data[0].price;
      this.valute = data[0].valute;
    });
  }
  refreshData() {
    this.data.getMovie(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.movies = data;
      this.rented_by = data[0].rented_by;
      this.rented_by2 = data[0].rented_by;
      this.rented_date = data[0].date_rented;
      this.id = data[0].id;
    });
  }
}
